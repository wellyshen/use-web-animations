import { renderHook } from "@testing-library/react-hooks";

import useWebAnimations, { Options } from "../useWebAnimations";

describe("useWebAnimations", () => {
  const el = document.createElement("div");
  const target = { current: el };
  const mockKeyframes = { transform: ["translateX(500px)"] };
  const mockTiming = 3000;

  const renderHelper = ({
    ref = target,
    keyframes = mockKeyframes,
    timing = mockTiming,
    ...rest
  }: Options<HTMLDivElement> = {}) =>
    renderHook(() => useWebAnimations({ ref, keyframes, timing, ...rest }))
      .result;

  beforeEach(() => {
    // @ts-ignore
    el.animate = jest.fn(() => ({
      pause: jest.fn(),
    }));
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

  it("should pause animation at start", () => {
    renderHelper({ autoPlay: false });
    // @ts-ignore
    expect(el.animate.mock.results[0].value.pause).toHaveBeenCalled();
  });

  it("should update playback rate correctly", () => {
    const playbackRate = 1;
    renderHelper({ playbackRate });
    // @ts-ignore
    expect(el.animate.mock.results[0].value.playbackRate).toBe(playbackRate);
  });

  it("should set animation id correctly", () => {
    const id = "test";
    renderHelper({ id });
    // @ts-ignore
    expect(el.animate.mock.results[0].value.id).toBe(id);
  });
});
