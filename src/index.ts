import "web-animations-js";

import { RefObject, useRef, useCallback } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

interface Callback {
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
  onFinish?: Callback;
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
  onReady,
  onFinish,
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

    if (animRef.current) {
      animRef.current.ready.then(onReady);
      animRef.current.finished.then(onFinish);
    }
  }, [keyframes, timing, pausedAtStart, onReady, onFinish]);

  return { ref, getAnimation, animate };
};

export default useWebAnimations;
