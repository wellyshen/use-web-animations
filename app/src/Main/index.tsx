import type { FC, MouseEvent, ChangeEvent } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

import styles from "./styles.module.scss";

const Main: FC = () => {
  const { ref: blockRef, getAnimation: getBlockAnim } =
    useWebAnimations<HTMLDivElement>({
      keyframes: { width: ["0", "100%", "0"], left: ["0", "0", "100%"] },
      animationOptions: {
        duration: 2000,
        fill: "forwards",
        easing: "cubic-bezier(0.74, 0.06, 0.4, 0.92)",
      },
    });
  const { ref: textRef, getAnimation: getTxtAnim } =
    useWebAnimations<HTMLDivElement>({
      keyframes: { opacity: ["0", "1"] },
      animationOptions: {
        delay: 1600,
        duration: 1000,
        fill: "forwards",
      },
    });
  const { ref: heartRef, getAnimation: getHeartAnim } =
    useWebAnimations<HTMLDivElement>({
      keyframes: {
        transform: ["translate3d(0, 0, 0)", "translate3d(0, -100%, 0)"],
      },
      animationOptions: {
        delay: 2000,
        duration: 250,
        fill: "forwards",
        easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    });

  const handlePlayback = (e: MouseEvent) => {
    const method = (e.target as HTMLButtonElement).id;

    (getBlockAnim() as any)[method]();
    (getTxtAnim() as any)[method]();
    (getHeartAnim() as any)[method]();
  };

  const handleSeek = (e: ChangeEvent) => {
    const value = parseInt((e.target as HTMLInputElement).value, 10);

    const blockAnim = getBlockAnim();
    const blockTiming = blockAnim?.effect?.getTiming();
    if (blockAnim?.playState === "running") blockAnim.pause();
    // @ts-ignore
    blockAnim.currentTime = ((blockTiming?.duration as number) / 100) * value;

    const txtAnim = getTxtAnim();
    const txtTiming = txtAnim?.effect?.getTiming();
    if (txtAnim?.playState === "running") txtAnim.pause();
    // @ts-ignore
    txtAnim.currentTime =
      // @ts-ignore
      ((txtTiming.delay + (txtTiming.duration as number)) / 100) * value;

    const heartAnim = getHeartAnim();
    const heartTiming = heartAnim?.effect?.getTiming();
    if (heartAnim?.playState === "running") heartAnim.pause();
    // @ts-ignore
    heartAnim.currentTime =
      // @ts-ignore
      ((heartTiming.delay + (heartTiming.duration as number)) / 100) * value;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>USE-WEB-ANIMATIONS</h1>
      <p className={styles.subtitle}>
        React hook for highly-performant and manipulable animations using Web
        Animations API.
      </p>
      <div className={styles.mask}>
        <div className={styles.block} ref={blockRef} />
        <span className={styles.txt} ref={textRef}>
          BLACK LIVES MATTER
        </span>
        <span className={styles.heart} ref={heartRef}>
          ❤
        </span>
      </div>
      <div>
        <div>
          <button
            id="play"
            className={styles.btn}
            type="button"
            onClick={handlePlayback}
          >
            PLAY
          </button>
          <button
            id="pause"
            className={styles.btn}
            type="button"
            onClick={handlePlayback}
          >
            PAUSE
          </button>
          <button
            id="reverse"
            className={styles.btn}
            type="button"
            onClick={handlePlayback}
          >
            REVERSE
          </button>
          <button
            id="finish"
            className={styles.btn}
            type="button"
            onClick={handlePlayback}
          >
            FINISH
          </button>
        </div>
        <input
          className={styles.slider}
          type="range"
          defaultValue="0"
          onChange={handleSeek}
        />
      </div>
    </div>
  );
};

export default Main;
