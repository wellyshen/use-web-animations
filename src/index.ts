import "web-animations-js";

import { RefObject, useRef, useCallback, useEffect } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

import useLatest from "./useLatest";

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
  const onReadyRef = useLatest<Callback>(onReady);
  const onUpdateRef = useLatest<Callback>(onUpdate);
  const onFinishRef = useLatest<Callback>(onFinish);
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
    // Google Chrome < v84 has no the ready property
    if (onReadyRef.current && anim?.ready) anim.ready.then(onReadyRef.current);
  }, [keyframes, timing, pausedAtStart, getAnimation]);

  useEffect(() => {
    const update = () => {
      const anim = getAnimation();

      if (anim) {
        const { playState } = anim;

        if (
          onUpdateRef.current &&
          (playState === PlayState.Running ||
            playState !== prevPlayStateRef.current)
        )
          onUpdateRef.current(anim);

        if (
          onFinishRef.current &&
          playState === PlayState.Finished &&
          prevPlayStateRef.current !== PlayState.Finished
        )
          onFinishRef.current(anim);

        prevPlayStateRef.current = playState;
      }

      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAnimation]);

  return { ref, getAnimation, animate };
};

export default useWebAnimations;
