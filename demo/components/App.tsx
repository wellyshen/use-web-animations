import React, { FC, MouseEvent } from "react";
import useWebAnimations from "../../src";
import Wrap from "./Wrap";

const App: FC = () => {
  const { ref: blockRef, getAnimation: getBlockAnim } = useWebAnimations<
    HTMLDivElement
  >({
    keyframes: { width: ["0", "100%", "0"], left: ["0", "0", "100%"] },
    timing: {
      duration: 2000,
      fill: "forwards",
      easing: "cubic-bezier(0.74, 0.06, 0.4, 0.92)",
    },
  });
  const { ref: textRef, getAnimation: getTextAnim } = useWebAnimations<
    HTMLDivElement
  >({
    keyframes: { opacity: ["0", "1"] },
    timing: {
      delay: 1600,
      duration: 1000,
      fill: "forwards",
    },
  });
  const { ref: heartRef, getAnimation: getHeartAnim } = useWebAnimations<
    HTMLDivElement
  >({
    keyframes: [
      { transform: "translate3d(0, 0, 0)", opacity: 1 },
      { transform: "translate3d(0, -130%, 0)", opacity: 0.5 },
      { transform: "translate3d(0, -100%, 0)", opacity: 1 },
    ],
    timing: {
      delay: 2000,
      duration: 300,
      fill: "forwards",
      easing: "cubic-bezier(0.215, 0.610, 0.355, 1)",
    },
  });

  const handlePlayback = (e: MouseEvent) => {
    const method = (e.target as HTMLButtonElement).id;
    (getBlockAnim() as any)[method]();
    (getTextAnim() as any)[method]();
    (getHeartAnim() as any)[method]();
  };

  return (
    <Wrap>
      <h1 className="font-bold text-6xl text-gray-900 leading-tight mb-4">
        useWebAnimations
      </h1>
      <p className="text-xl leading-relaxed max-w-screen-sm mx-auto">
        A React hook for highly-performant and manipulable animations, using the
        Web Animations API.
      </p>
      <div>
        <button id="play" type="button" onClick={handlePlayback}>
          PLAY
        </button>
        <button id="pause" type="button" onClick={handlePlayback}>
          PAUSE
        </button>
        <button id="reverse" type="button" onClick={handlePlayback}>
          REVERSE
        </button>
        <button id="finish" type="button" onClick={handlePlayback}>
          FINISH
        </button>
      </div>
    </Wrap>
  );
};

export default App;
