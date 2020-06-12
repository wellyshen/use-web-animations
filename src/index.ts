import { RefObject, useState, useRef, useCallback, useEffect } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

import useLatest from "./useLatest";

// @ts-ignore
// eslint-disable-next-line no-unused-expressions
// if (typeof document !== "undefined") import("web-animations-js");

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
type PlayState = string | null;
interface Animate {
  (keyframes: Keyframes, timing?: Timing, pausedAtStart?: PausedAtStart): void;
}
interface Return<T> {
  readonly ref: RefObject<T>;
  readonly playState: PlayState;
  readonly getAnimation: () => Animation;
  readonly animate: Animate;
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
  const [playState, setPlayState] = useState<PlayState>(null);
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
        const { playState: curPlayState } = anim;

        if (curPlayState !== prevPlayStateRef.current)
          setPlayState(curPlayState);

        if (
          onUpdateRef.current &&
          (curPlayState === "running" ||
            curPlayState !== prevPlayStateRef.current)
        )
          onUpdateRef.current(anim);

        if (
          onFinishRef.current &&
          curPlayState === "finished" &&
          prevPlayStateRef.current !== "finished"
        )
          onFinishRef.current(anim);

        prevPlayStateRef.current = curPlayState;
      }

      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAnimation]);

  return { ref, playState, getAnimation, animate };
};

export default useWebAnimations;
