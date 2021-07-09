/* eslint-disable compat/compat */

import { renderHook, act } from "@testing-library/react-hooks";

import useWebAnimations, {
  Options,
  polyfillErr,
  eventErr,
} from "../useWebAnimations";

describe("useWebAnimations", () => {
  jest.useFakeTimers();

  const el = document.createElement("div");
  const target = { current: el };
  const id = "test";
  const playbackRate = 1;
  const mockKeyframes = { transform: ["translateX(500px)"] };
  const mockTiming = 3000;

  const renderHelper = ({
    ref = target,
    keyframes = mockKeyframes,
    animationOptions = mockTiming,
    ...rest
  }: Partial<Options<HTMLDivElement>> = {}) =>
    renderHook(() =>
      useWebAnimations({ ref, keyframes, animationOptions, ...rest })
    );

  const e = { playState: "pause" };
  const animation = {
    pending: true,
    playState: "pause",
    ready: Promise.resolve(e),
    pause: jest.fn(),
    finish: jest.fn(),
    cancel: jest.fn(),
  };

  beforeEach(() => {
    // @ts-expect-error
    el.animate = jest.fn(() => animation);
  });

  it("should cancel animation", async () => {
    const { unmount } = renderHelper();
    unmount();
    // @ts-expect-error
    const anim = el.animate.mock.results[0].value;
    expect(anim.finish).toHaveBeenCalled();
    expect(anim.cancel).toHaveBeenCalled();
  });

  it("should call onReady correctly", async () => {
    console.error = jest.fn();
    const onReady = jest.fn();
    renderHelper({ onReady });
    await Promise.resolve();
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
    renderHelper({ onFinish });
    // @ts-expect-error
    el.animate.mock.results[0].value.onfinish({ target: e });
    expect(onFinish).toHaveBeenCalledWith({
      playState: e.playState,
      animation: e,
      animate: expect.any(Function),
    });
    expect(console.error).not.toHaveBeenCalled();
  });

  it("should call onUpdate correctly", () => {
    window.requestAnimationFrame = jest
      .fn()
      .mockImplementationOnce((cb) => {
        setTimeout(cb, 0);
      })
      .mockImplementationOnce((cb) => {
        setTimeout(cb, 1);
      })
      .mockImplementationOnce((cb) => {
        setTimeout(cb, 2);
      })
      .mockImplementationOnce((cb) => {
        setTimeout(cb, 3);
      })
      .mockImplementationOnce((cb) => {
        setTimeout(cb, 4);
      });

    const onUpdate = jest.fn();
    let evt = {
      playState: animation.playState,
      animation,
      animate: expect.any(Function),
    };
    renderHelper({ onUpdate });
    act(() => {
      jest.advanceTimersByTime(0);
    });
    expect(onUpdate).toHaveBeenCalledWith(evt);

    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(onUpdate).toHaveBeenCalledTimes(1);
    expect(onUpdate).toHaveBeenCalledWith(evt);

    animation.pending = false;
    act(() => {
      jest.advanceTimersByTime(2);
    });
    expect(onUpdate).toHaveBeenCalledTimes(2);

    animation.playState = "running";
    evt = {
      ...evt,
      playState: animation.playState,
    };
    act(() => {
      jest.advanceTimersByTime(3);
    });
    expect(onUpdate).toHaveBeenCalledTimes(3);
    expect(onUpdate).toHaveBeenCalledWith(evt);

    act(() => {
      jest.advanceTimersByTime(4);
    });
    expect(onUpdate).toHaveBeenCalledTimes(4);
  });

  it("shouldn't call animate if either ref or keyframes isn't set", () => {
    // @ts-expect-error
    renderHelper({ ref: null });
    expect(el.animate).not.toHaveBeenCalled();

    // @ts-expect-error
    renderHelper({ keyframes: null });
    expect(el.animate).not.toHaveBeenCalled();
  });

  it("should call animate correctly", () => {
    renderHelper();
    expect(el.animate).toHaveBeenCalledWith(mockKeyframes, mockTiming);
  });

  it("should return workable ref", () => {
    // @ts-expect-error
    const { result } = renderHelper({ ref: null });
    expect(result.current.ref).toEqual({ current: null });

    result.current.ref = target;
    expect(result.current.ref).toEqual(target);
  });

  it("should return playState correctly", () => {
    window.requestAnimationFrame = jest.fn().mockImplementationOnce((cb) => {
      setTimeout(cb, 0);
    });

    const { result } = renderHelper();
    act(() => {
      jest.runAllTimers();
    });
    expect(result.current.playState).toBe(animation.playState);
  });

  it("should return workable getAnimation method", () => {
    const { result } = renderHelper();
    expect(result.current.getAnimation()).toEqual(animation);
  });

  it("should return workable animate method", () => {
    const { result } = renderHelper();
    result.current.animate({
      id,
      autoPlay: false,
      playbackRate,
      keyframes: mockKeyframes,
      animationOptions: mockTiming,
    });
    // @ts-expect-error
    const anim = el.animate.mock.results[0].value;
    expect(anim.pause).toHaveBeenCalled();
    expect(anim.playbackRate).toBe(playbackRate);
    expect(anim.id).toBe(id);
    expect(el.animate).toHaveBeenCalledWith(mockKeyframes, mockTiming);
  });

  it("should set animation id correctly", () => {
    renderHelper({ id });
    // @ts-expect-error
    expect(el.animate.mock.results[0].value.id).toBe(id);
  });

  it("should pause animation at start", () => {
    renderHelper({ autoPlay: false });
    // @ts-expect-error
    expect(el.animate.mock.results[0].value.pause).toHaveBeenCalled();
  });

  it("should update playback rate correctly", () => {
    renderHelper({ playbackRate });
    // @ts-expect-error
    expect(el.animate.mock.results[0].value.playbackRate).toBe(playbackRate);
  });

  it("should throw polyfill error", () => {
    console.error = jest.fn();
    // @ts-expect-error
    el.animate = null;
    renderHelper();
    expect(console.error).toHaveBeenCalledWith(polyfillErr);
  });

  it("should throw event errors", () => {
    console.error = jest.fn();
    // @ts-expect-error
    animation.ready = null;
    renderHelper({ onReady: () => null });
    expect(console.error).toHaveBeenCalledWith(eventErr);
  });
});
