declare module "@wellyshen/use-web-animations" {
  import { RefObject } from "react";

  export type Keyframes = Keyframe[] | PropertyIndexedKeyframes;

  export type PlayState = string | null;

  type AnimConf = Partial<{
    id: string;
    playbackRate: number;
    autoPlay: boolean;
    animationOptions:
      | number
      | (KeyframeAnimationOptions & { pseudoElement?: string });
  }>;

  export interface Animate {
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

  export interface Options<T> extends AnimConf {
    ref?: RefObject<T>;
    keyframes: Keyframes;
    onReady?: Callback;
    onUpdate?: Callback;
    onFinish?: Callback;
  }

  export interface Return<T> {
    ref: RefObject<T>;
    playState: PlayState;
    getAnimation: () => Animation | undefined;
    animate: Animate;
  }

  const useWebAnimations: <T extends HTMLElement>(
    options?: Options<T>
  ) => Return<T>;

  export default useWebAnimations;

  interface Anim {
    keyframes: Keyframe[];
    animationOptions: EffectTiming;
  }

  export const bounce: Anim;
  export const flash: Anim;
  export const pulse: Anim;
  export const rubberBand: Anim;
  export const shakeX: Anim;
  export const shakeY: Anim;
  export const headShake: Anim;
  export const swing: Anim;
  export const tada: Anim;
  export const wobble: Anim;
  export const jello: Anim;
  export const heartBeat: Anim;
  export const backInDown: Anim;
  export const backInLeft: Anim;
  export const backInRight: Anim;
  export const backInUp: Anim;
  export const backOutDown: Anim;
  export const backOutLeft: Anim;
  export const backOutRight: Anim;
  export const backOutUp: Anim;
  export const bounceIn: Anim;
  export const bounceInDown: Anim;
  export const bounceInLeft: Anim;
  export const bounceInRight: Anim;
  export const bounceInUp: Anim;
  export const bounceOut: Anim;
  export const bounceOutDown: Anim;
  export const bounceOutLeft: Anim;
  export const bounceOutRight: Anim;
  export const bounceOutUp: Anim;
  export const fadeIn: Anim;
  export const fadeInDown: Anim;
  export const fadeInDownBig: Anim;
  export const fadeInLeft: Anim;
  export const fadeInLeftBig: Anim;
  export const fadeInRight: Anim;
  export const fadeInRightBig: Anim;
  export const fadeInUp: Anim;
  export const fadeInUpBig: Anim;
  export const fadeInTopLeft: Anim;
  export const fadeInTopRight: Anim;
  export const fadeInBottomLeft: Anim;
  export const fadeInBottomRight: Anim;
  export const fadeOut: Anim;
  export const fadeOutDown: Anim;
  export const fadeOutDownBig: Anim;
  export const fadeOutLeft: Anim;
  export const fadeOutLeftBig: Anim;
  export const fadeOutRight: Anim;
  export const fadeOutRightBig: Anim;
  export const fadeOutUp: Anim;
  export const fadeOutUpBig: Anim;
  export const fadeOutTopLeft: Anim;
  export const fadeOutTopRight: Anim;
  export const fadeOutBottomLeft: Anim;
  export const fadeOutBottomRight: Anim;
  export const flip: Anim;
  export const flipInX: Anim;
  export const flipInY: Anim;
  export const flipOutX: Anim;
  export const flipOutY: Anim;
  export const lightSpeedInRight: Anim;
  export const lightSpeedInLeft: Anim;
  export const lightSpeedOutRight: Anim;
  export const lightSpeedOutLeft: Anim;
  export const rotateIn: Anim;
  export const rotateInDownLeft: Anim;
  export const rotateInDownRight: Anim;
  export const rotateInUpLeft: Anim;
  export const rotateInUpRight: Anim;
  export const rotateOut: Anim;
  export const rotateOutDownLeft: Anim;
  export const rotateOutDownRight: Anim;
  export const rotateOutUpLeft: Anim;
  export const rotateOutUpRight: Anim;
  export const hinge: Anim;
  export const jackInTheBox: Anim;
  export const rollIn: Anim;
  export const rollOut: Anim;
  export const zoomIn: Anim;
  export const zoomInDown: Anim;
  export const zoomInLeft: Anim;
  export const zoomInRight: Anim;
  export const zoomInUp: Anim;
  export const zoomOut: Anim;
  export const zoomOutDown: Anim;
  export const zoomOutLeft: Anim;
  export const zoomOutRight: Anim;
  export const zoomOutUp: Anim;
  export const slideInDown: Anim;
  export const slideInLeft: Anim;
  export const slideInRight: Anim;
  export const slideInUp: Anim;
  export const slideOutDown: Anim;
  export const slideOutLeft: Anim;
  export const slideOutRight: Anim;
  export const slideOutUp: Anim;
}
