import "web-animations-js";

import { RefObject, useRef, useCallback } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

interface Options<T> {
  ref?: RefObject<T>;
  keyframes?: Keyframe[];
  timing?: number | EffectTiming;
}
interface Return<T> {
  readonly ref: RefObject<T>;
  readonly play: () => void;
  readonly pause: () => void;
  readonly reverse: () => void;
  readonly updatePlaybackRate: (rate: number) => void;
}

const useWebAnimations = <T extends HTMLElement>({
  ref: refOpt,
  keyframes,
  timing,
}: Options<T> = {}): Return<T> => {
  const refVar = useRef<T>(null);
  const animation = useRef<Animation>(null);
  const ref = refOpt || refVar;

  const play = useCallback(() => {
    if (animation.current) animation.current.play();
  }, [animation]);

  const pause = useCallback(() => {
    if (animation.current) animation.current.pause();
  }, [animation]);

  const reverse = useCallback(() => {
    if (animation.current) animation.current.reverse();
  }, [animation]);

  const updatePlaybackRate = useCallback(
    (rate) => {
      if (animation.current) animation.current.updatePlaybackRate(rate);
    },
    [animation]
  );

  useDeepCompareEffect(() => {
    if (!ref.current) return;

    animation.current = ref.current.animate(keyframes, timing);
  }, [ref, keyframes, timing]);

  return { ref, play, pause, reverse, updatePlaybackRate };
};

export default useWebAnimations;
