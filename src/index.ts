import "web-animations-js";

import { RefObject, useRef, useCallback } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

interface Callback {
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
interface Animate {
  (keyframes: Keyframes, timing?: Timing, pausedAtStart?: PausedAtStart): void;
}
interface Return<T> {
  readonly ref: RefObject<T>;
  readonly getAnimation: () => Animation;
  readonly animate: Animate;
}

const useWebAnimations = <T extends HTMLElement>({
  ref: refOpt,
  keyframes,
  timing,
  pausedAtStart = false,
  onFinish,
  onCancel,
}: Options<T> = {}): Return<T> => {
  const animRef = useRef<Animation>();
  const refVar = useRef<T>();
  const ref = refOpt || refVar;

  const getAnimation = useCallback(() => animRef.current, []);

  const animate: Animate = useCallback(
    (k, t, p) => {
      if (!ref.current || !k) return;

      animRef.current = ref.current.animate(k, t);
      if (p) animRef.current.pause();
    },
    [ref]
  );

  useDeepCompareEffect(() => {
    animate(keyframes, timing, pausedAtStart);

    if (!animRef.current) return;

    const { current: anim } = animRef;

    if (onFinish)
      anim.onfinish = (e) => {
        onFinish(anim, e);
      };

    if (onCancel)
      anim.oncancel = (e) => {
        onCancel(anim, e);
      };
  }, [keyframes, timing, pausedAtStart, onFinish, onCancel]);

  return { ref, getAnimation, animate };
};

export default useWebAnimations;
