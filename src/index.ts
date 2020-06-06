import "web-animations-js";

import { RefObject, useState, useRef, useCallback, useEffect } from "react";
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
interface SetAnimation {
  (keyframes: Keyframes, timing?: Timing, pausedAtStart?: PausedAtStart): void;
}
interface Return<T> {
  readonly ref: RefObject<T>;
  readonly animation?: Animation;
  readonly setAnimation?: SetAnimation;
}

const useWebAnimations = <T extends HTMLElement>({
  ref: refOpt,
  keyframes,
  timing,
  pausedAtStart = false,
  onFinish,
  onCancel,
}: Options<T> = {}): Return<T> => {
  const [anim, setAnim] = useState<Animation>();
  const refVar = useRef<T>(null);
  const ref = refOpt || refVar;

  const setAnimation: SetAnimation = useCallback(
    (k, t, p) => {
      if (!ref.current || !k) return;

      const a = ref.current.animate(k, t);

      if (p) a.cancel();
      setAnim(a);
    },
    [ref]
  );

  useDeepCompareEffect(() => {
    setAnimation(keyframes, timing, pausedAtStart);
  }, [keyframes, timing, pausedAtStart]);

  useEffect(() => {
    if (!anim) return;

    if (onFinish)
      anim.onfinish = (e) => {
        onFinish(anim, e);
      };

    if (onCancel)
      anim.oncancel = (e) => {
        onCancel(anim, e);
      };
  }, [anim, onFinish, onCancel]);

  return { ref, animation: anim, setAnimation };
};

export default useWebAnimations;
