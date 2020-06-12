declare module "@wellyshen/use-web-animations" {
  import { RefObject } from "react";

  export interface Callback {
    (animation: Animation): void;
  }

  type Keyframes = Keyframe[] | PropertyIndexedKeyframes;

  type Timing = number | KeyframeAnimationOptions;

  type PausedAtStart = boolean;

  interface Options<T> {
    ref?: RefObject<T>;
    keyframes?: Keyframes;
    timing?: Timing;
    pausedAtStart?: PausedAtStart;
    onReady?: Callback;
    onUpdate?: Callback;
    onFinish?: Callback;
  }

  interface Return<T> {
    readonly ref: RefObject<T>;
    readonly playState: string | null;
    readonly getAnimation: () => Animation;
    readonly animate: (
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
