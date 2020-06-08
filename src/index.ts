import "web-animations-js";

import { RefObject, useRef, useCallback, useEffect } from "react";
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
  onUpdate?: Callback;
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
enum PlayState {
  Running = "running",
  Finished = "finished",
}

const useWebAnimations = <T extends HTMLElement>({
  ref: refOpt,
  keyframes,
  timing,
  pausedAtStart = false,
  onReady,
  onUpdate,
  onFinish,
}: Options<T> = {}): Return<T> => {
  const animRef = useRef<Animation>();
  const prevPlayStateRef = useRef<string>();
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

    const anim = getAnimation();
    if (onReady && anim?.ready) anim.ready.then(onReady);
  }, [keyframes, timing, pausedAtStart, getAnimation, onReady, onFinish]);

  useEffect(() => {
    const update = () => {
      const anim = getAnimation();

      if (anim) {
        const { playState } = anim;

        if (
          onUpdate &&
          (playState === PlayState.Running ||
            playState !== prevPlayStateRef.current)
        )
          onUpdate(anim);

        if (
          onFinish &&
          playState === PlayState.Finished &&
          prevPlayStateRef.current !== PlayState.Finished
        )
          onFinish(anim);

        prevPlayStateRef.current = playState;
      }

      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [getAnimation, onUpdate, onFinish]);

  return { ref, getAnimation, animate };
};

export default useWebAnimations;
