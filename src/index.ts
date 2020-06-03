import "web-animations-js";

import { RefObject, useState, useRef, useCallback } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

interface Options<T> {
  ref?: RefObject<T>;
  keyframes?: Keyframe[];
  timing?: number | EffectTiming;
}
interface Return<T> {
  readonly ref: RefObject<T>;
  readonly animation: Animation;
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
  const [animation, setAnimation] = useState<Animation>();
  const refVar = useRef<T>(null);
  const ref = refOpt || refVar;

  const play = useCallback(() => {
    if (animation) animation.play();
  }, [animation]);

  const pause = useCallback(() => {
    if (animation) animation.pause();
  }, [animation]);

  const reverse = useCallback(() => {
    if (animation) animation.reverse();
  }, [animation]);

  const updatePlaybackRate = useCallback(
    (rate) => {
      if (animation) animation.updatePlaybackRate(rate);
    },
    [animation]
  );

  useDeepCompareEffect(() => {
    if (!ref.current) return;

    setAnimation(ref.current.animate(keyframes, timing));
  }, [ref, keyframes, timing]);

  return {
    ref,
    animation,
    play,
    pause,
    reverse,
    updatePlaybackRate,
  };
};

export default useWebAnimations;
