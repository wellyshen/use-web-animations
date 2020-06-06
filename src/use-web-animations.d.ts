declare module "@welly/use-web-animations" {
  import { RefObject } from "react";

  export interface Callback {
    (animation: Animation, event: AnimationPlaybackEvent): void;
  }

  type Keyframes = Keyframe[] | PropertyIndexedKeyframes;

  type Timing = number | KeyframeAnimationOptions;

  type PausedAtStart = boolean;

  interface Options<T> {
    ref?: RefObject<T>;
    keyframes?: Keyframes;
    timing?: Timing;
    pausedAtStart?: PausedAtStart;
    onFinish?: Callback;
    onCancel?: Callback;
  }

  interface Return<T> {
    readonly ref: RefObject<T>;
    readonly animation?: Animation;
    readonly animate?: (
      keyframes: Keyframes,
      timing?: Timing,
      pausedAtStart?: PausedAtStart
    ) => void;
  }

  const useWebAnimations: <T extends HTMLElement>(
    options?: Options<T>
  ) => Return<T>;

  export default useWebAnimations;
}
