declare module "@wellyshen/use-web-animations" {
  import { RefObject } from "react";

  type Keyframes = Keyframe[] | PropertyIndexedKeyframes;

  type PlayState = string | null;

  interface AnimConf {
    id?: string;
    playbackRate?: number;
    pausedAtStart?: boolean;
    timing?: number | KeyframeAnimationOptions;
  }

  interface Animate {
    (args: AnimConf & { keyframes: Keyframes }): void;
  }

  export interface Event {
    playState: PlayState;
    animate: Animate;
    animation: Animation;
  }

  export interface Callback {
    (event: Event): void;
  }

  interface Options<T> extends AnimConf {
    ref?: RefObject<T>;
    keyframes?: Keyframes;
    onReady?: Callback;
    onUpdate?: Callback;
    onFinish?: Callback;
  }

  interface Return<T> {
    ref: RefObject<T>;
    readonly playState: PlayState;
    readonly getAnimation: () => Animation;
    readonly animate: Animate;
  }

  const useWebAnimations: <T extends HTMLElement>(
    options?: Options<T>
  ) => Return<T>;

  export default useWebAnimations;
}
