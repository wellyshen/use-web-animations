import "web-animations-js";

import { RefObject, useState, useRef, useEffect } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

interface Callback {
  (animation: Animation, event: AnimationPlaybackEvent): void;
}
interface Options<T> {
  ref?: RefObject<T>;
  keyframes?: Keyframe[] | PropertyIndexedKeyframes;
  timing?: number | KeyframeAnimationOptions;
  onFinish?: Callback;
  onCancel?: Callback;
}
interface Return<T> {
  readonly ref: RefObject<T>;
  readonly animation?: Animation;
}

const useWebAnimations = <T extends HTMLElement>({
  ref: refOpt,
  keyframes,
  timing,
  onFinish,
  onCancel,
}: Options<T> = {}): Return<T> => {
  const [animation, setAnimation] = useState<Animation>();
  const refVar = useRef<T>(null);
  const ref = refOpt || refVar;

  useDeepCompareEffect(() => {
    if (ref.current && keyframes)
      setAnimation(ref.current.animate(keyframes, timing));
  }, [ref, keyframes, timing]);

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

  return { ref, animation };
};

export default useWebAnimations;
