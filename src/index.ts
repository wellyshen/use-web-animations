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
interface Animate {
  (keyframes: Keyframes, timing?: Timing, pausedAtStart?: PausedAtStart): void;
}
interface Return<T> {
  readonly ref: RefObject<T>;
  readonly animation?: Animation;
  readonly animate?: Animate;
}

const useWebAnimations = <T extends HTMLElement>({
  ref: refOpt,
  keyframes,
  timing,
  pausedAtStart = false,
  onFinish,
  onCancel,
}: Options<T> = {}): Return<T> => {
  const [animation, setAnimation] = useState<Animation>();
  const refVar = useRef<T>(null);
  const ref = refOpt || refVar;

  const animate: Animate = useCallback(
    (k, t, p) => {
      if (!ref.current || !k) return;

      const anim = ref.current.animate(k, t);

      if (p) anim.cancel();
      setAnimation(anim);
    },
    [ref]
  );

  useDeepCompareEffect(() => {
    animate(keyframes, timing, pausedAtStart);
  }, [keyframes, timing, pausedAtStart]);

  useEffect(() => {
    if (!animation) return;

    if (onFinish)
      animation.onfinish = (e) => {
        onFinish(animation, e);
      };

    if (onCancel)
      animation.oncancel = (e) => {
        onCancel(animation, e);
      };
  }, [animation, onFinish, onCancel]);

  return { ref, animation, animate };
};

export default useWebAnimations;
