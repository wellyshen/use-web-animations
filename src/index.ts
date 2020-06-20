import { RefObject, useState, useRef, useCallback, useEffect } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

// @ts-ignore
import loadPolyfill from "./polyfill";
import useLatest from "./useLatest";

if (typeof window !== "undefined") loadPolyfill();

type Keyframes = Keyframe[] | PropertyIndexedKeyframes;
type PlayState = string | null;
interface AnimConf {
  id?: string;
  playbackRate?: number;
  autoPlay?: boolean;
  timing?: number | KeyframeAnimationOptions;
}
interface Animate {
  (args: AnimConf & { keyframes: Keyframes }): void;
}
interface Callback {
  (event: {
    playState: PlayState;
    animate: Animate;
    animation: Animation;
  }): void;
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

const useWebAnimations = <T extends HTMLElement>({
  ref: refOpt,
  id,
  playbackRate,
  autoPlay = true,
  keyframes,
  timing,
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
    (args) => {
      if (!ref.current || !args.keyframes) return;

      animRef.current = ref.current.animate(args.keyframes, args.timing);
      const { current: anim } = animRef;

      if (!args.autoPlay) anim.pause();
      if (args.id) anim.id = args.id;
      if (args.playbackRate) anim.playbackRate = args.playbackRate;
      if (onReadyRef.current)
        anim.ready.then((animation) => {
          onReadyRef.current({
            playState: animation.playState,
            animate,
            animation,
          });
        });
      if (onFinishRef.current)
        anim.finished.then((animation) => {
          onFinishRef.current({
            playState: animation.playState,
            animate,
            animation,
          });
        });

      prevPlayStateRef.current = undefined;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ref]
  );

  useDeepCompareEffect(() => {
    animate({ id, playbackRate, autoPlay, keyframes, timing });
  }, [id, playbackRate, autoPlay, keyframes, timing, animate]);

  useEffect(() => {
    const update = () => {
      const animation = getAnimation();

      if (animation) {
        const { playState: curPlayState } = animation;

        if (curPlayState !== prevPlayStateRef.current)
          setPlayState(curPlayState);

        if (
          onUpdateRef.current &&
          (curPlayState === "running" ||
            curPlayState !== prevPlayStateRef.current)
        )
          onUpdateRef.current({
            playState: animation.playState,
            animate,
            animation,
          });

        prevPlayStateRef.current = curPlayState;
      }

      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAnimation, animate]);

  return { ref, playState, getAnimation, animate };
};

export default useWebAnimations;
