import { RefObject, useState, useRef, useCallback, useEffect } from "react";

import useLatest from "./useLatest";

export const polyfillErr =
  "💡 use-web-animations: please install polyfill to use this hook. See https://github.com/wellyshen/use-web-animations##use-polyfill";
export const eventErr = (type: string): string =>
  `💡 use-web-animations: the browser doesn't support ${type} event, please use "onUpdate" to monitor the animation's state instead. See https://github.com/wellyshen/use-web-animations#basic-usage`;

type Keyframes = Keyframe[] | PropertyIndexedKeyframes;
type PlayState = string | null;
type BaseOptions = Partial<{
  id: string;
  playbackRate: number;
  autoPlay: boolean;
  animationOptions:
    | number
    | (KeyframeAnimationOptions & { pseudoElement?: string });
}>;
interface Animate {
  (options: BaseOptions & { keyframes: Keyframes }): void;
}
interface Callback {
  (event: {
    playState: PlayState;
    animate: Animate;
    animation: Animation;
  }): void;
}
export interface Options<T> extends BaseOptions {
  ref?: RefObject<T>;
  keyframes?: Keyframes;
  onReady?: Callback;
  onUpdate?: Callback;
  onFinish?: Callback;
}
interface Return<T> {
  ref: RefObject<T>;
  playState: PlayState;
  getAnimation: () => Animation | undefined;
  animate: Animate;
}

const useWebAnimations = <T extends HTMLElement>({
  ref: refOpt,
  id,
  playbackRate,
  autoPlay,
  keyframes,
  animationOptions,
  onReady,
  onUpdate,
  onFinish,
}: Options<T> = {}): Return<T> => {
  const [playState, setPlayState] = useState<PlayState>(null);
  const hasUnmountedRef = useRef(false);
  const animRef = useRef<Animation>();
  const prevPendingRef = useRef<boolean>();
  const prevPlayStateRef = useRef<string>();
  const keyframesRef = useRef(keyframes);
  const animationOptionsRef = useRef(animationOptions);
  const onReadyRef = useLatest(onReady);
  const onUpdateRef = useLatest(onUpdate);
  const onFinishRef = useLatest(onFinish);
  const refVar = useRef<T>(null);
  const ref = refOpt || refVar;

  const getAnimation = useCallback(() => animRef.current, []);

  const animate: Animate = useCallback(
    (args) => {
      if (!ref.current || !args.keyframes) return;
      if (!ref.current.animate) {
        console.error(polyfillErr);
        return;
      }

      animRef.current = ref.current.animate(
        args.keyframes,
        args.animationOptions
      );
      const { current: anim } = animRef;

      if (args.autoPlay === false) anim.pause();
      if (args.id) anim.id = args.id;
      if (args.playbackRate) anim.playbackRate = args.playbackRate;

      if (onReadyRef.current) {
        if (anim.ready) {
          anim.ready.then((animation) => {
            // @ts-expect-error
            onReadyRef.current({
              playState: animation.playState,
              animate,
              animation,
            });
          });
        } else {
          console.error(eventErr("onReady"));
        }
      }

      if (onFinishRef.current) {
        if (anim.finished) {
          anim.finished.then((animation) => {
            if (!hasUnmountedRef.current) {
              // @ts-expect-error
              onFinishRef.current({
                playState: animation.playState,
                animate,
                animation,
              });
            }
          });
        } else {
          console.error(eventErr("onFinish"));
        }
      }

      prevPlayStateRef.current = undefined;
    },
    [onFinishRef, onReadyRef, ref]
  );

  useEffect(() => {
    if (keyframesRef.current)
      animate({
        id,
        playbackRate,
        autoPlay,
        keyframes: keyframesRef.current,
        animationOptions: animationOptionsRef.current,
      });
  }, [animate, autoPlay, id, playbackRate]);

  useEffect(() => {
    let rafId: number;

    const update = () => {
      const animation = getAnimation();

      if (animation) {
        const { pending, playState: curPlayState } = animation;

        if (prevPlayStateRef.current !== curPlayState)
          setPlayState(curPlayState);

        if (
          onUpdateRef.current &&
          (prevPendingRef.current !== pending ||
            prevPlayStateRef.current !== curPlayState ||
            curPlayState === "running")
        )
          onUpdateRef.current({ playState: curPlayState, animate, animation });

        prevPendingRef.current = pending;
        prevPlayStateRef.current = curPlayState;
      }

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);

      hasUnmountedRef.current = true;
      getAnimation()?.finish();
      getAnimation()?.cancel();
    };
  }, [animate, getAnimation, onUpdateRef]);

  return { ref, playState, getAnimation, animate };
};

export default useWebAnimations;
