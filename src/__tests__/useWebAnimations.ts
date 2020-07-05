/* eslint-disable compat/compat */

import { renderHook, act } from "@testing-library/react-hooks";

import useWebAnimations, {
  Options,
  polyfillErr,
  eventErr,
} from "../useWebAnimations";

describe("useWebAnimations", () => {
  const el = document.createElement("div");
  const target = { current: el };
  const id = "test";
  const playbackRate = 1;
  const mockKeyframes = { transform: ["translateX(500px)"] };
  const mockTiming = 3000;

  const renderHelper = ({
    ref = target,
    keyframes = mockKeyframes,
    timing = mockTiming,
    ...rest
  }: Options<HTMLDivElement> = {}) =>
    renderHook(() => useWebAnimations({ ref, keyframes, timing, ...rest }));

  const e = { playState: "running" };
  const animation = {
    playState: "running",
    ready: Promise.resolve(e),
    finished: Promise.resolve(e),
    pause: jest.fn(),
  };

  beforeEach(() => {
    // @ts-ignore
    el.animate = jest.fn(() => animation);
  });

  it("should call onReady correctly", async () => {
    console.error = jest.fn();

    const onReady = jest.fn();
    const { waitForNextUpdate } = renderHelper({ onReady });
    await waitForNextUpdate();
    expect(onReady).toHaveBeenCalledWith({
      playState: e.playState,
      animation: e,
      animate: expect.any(Function),
    });
    expect(console.error).not.toHaveBeenCalled();
  });

  it("should call onFinish correctly", async () => {
    console.error = jest.fn();

    const onFinish = jest.fn();
    const { waitForNextUpdate } = renderHelper({ onFinish });
    await waitForNextUpdate();
    expect(onFinish).toHaveBeenCalledWith({
      playState: e.playState,
      animation: e,
      animate: expect.any(Function),
    });
    expect(console.error).not.toHaveBeenCalled();
  });

  it("should throw polyfill error", () => {
    console.error = jest.fn();

    el.animate = null;
    renderHelper();
    expect(console.error).toHaveBeenCalledWith(polyfillErr);
  });

  it("should throw event errors", () => {
    console.error = jest.fn();

    // @ts-ignore
    el.animate = () => ({});
    renderHelper({ onReady: () => null });
    expect(console.error).toHaveBeenCalledWith(eventErr("onReady"));

    renderHelper({ onFinish: () => null });
    expect(console.error).toHaveBeenLastCalledWith(eventErr("onFinish"));
  });

  it("shouldn't call animate if either ref or keyframes isn't set", () => {
    renderHelper({ ref: null });
    expect(el.animate).not.toHaveBeenCalled();

    renderHelper({ keyframes: null });
    expect(el.animate).not.toHaveBeenCalled();
  });

  it("should call animate correctly", () => {
    renderHelper();
    expect(el.animate).toHaveBeenCalledWith(mockKeyframes, mockTiming);
  });

  it("should return workable ref", () => {
    const { result } = renderHelper({ ref: null });
    expect(result.current.ref).toStrictEqual({ current: null });

    result.current.ref = target;
    expect(result.current.ref).toStrictEqual(target);
  });

  it("should return playState correctly", () => {
    window.requestAnimationFrame = jest.fn().mockImplementationOnce((cb) => {
      setTimeout(cb, 0);
    });
    jest.useFakeTimers();

    const { result } = renderHelper();
    act(() => {
      jest.runAllTimers();
    });
    expect(result.current.playState).toBe(animation.playState);
  });

  it("should return workable getAnimation method", () => {
    const { result } = renderHelper();
    expect(result.current.getAnimation()).toStrictEqual(animation);
  });

  it("should return workable animate method", () => {
    const { result } = renderHelper();
    result.current.animate({
      id,
      autoPlay: false,
      playbackRate,
      keyframes: mockKeyframes,
      timing: mockTiming,
    });
    // @ts-ignore
    const anim = el.animate.mock.results[0].value;
    expect(anim.pause).toHaveBeenCalled();
    expect(anim.playbackRate).toBe(playbackRate);
    expect(anim.id).toBe(id);
    expect(el.animate).toHaveBeenCalledWith(mockKeyframes, mockTiming);
  });

  it("should set animation id correctly", () => {
    renderHelper({ id });
    // @ts-ignore
    expect(el.animate.mock.results[0].value.id).toBe(id);
  });

  it("should pause animation at start", () => {
    renderHelper({ autoPlay: false });
    // @ts-ignore
    expect(el.animate.mock.results[0].value.pause).toHaveBeenCalled();
  });

  it("should update playback rate correctly", () => {
    renderHelper({ playbackRate });
    // @ts-ignore
    expect(el.animate.mock.results[0].value.playbackRate).toBe(playbackRate);
  });
});
