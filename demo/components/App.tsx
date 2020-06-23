import React, { FC, MouseEvent } from "react";
import useWebAnimations from "../../src";
import Wrap from "./Wrap";
import Header from "./Header";
import Finish from "../icons/Finish";
import Play from "../icons/Play";
import Pause from "../icons/Pause";
import Reverse from "../icons/Reverse";

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
      <Header />
      <h1 className="font-bold text-6xl text-gray-900 leading-tight mb-4">
        useWebAnimations
      </h1>
      <p className="text-2xl leading-relaxed max-w-screen-sm mx-auto mb-16">
        A React hook for highly-performant and manipulable animations, using the
        Web Animations API.
      </p>
      <div className="flex justify-center mb-12">
        <button
          className="shadow-inner uppercase border-t-2 border-r-2 border-l-2 border-b-2 border-pink-500 bg-pink-500 text-white rounded-tl-md rounded-bl-md px-5 py-3 text-gray-900 flex items-center font-bold text-sm tracking-wider"
          id="play"
          type="button"
          onClick={handlePlayback}
        >
          <div className="w-5 h-5 mr-1 text-white">
            <Play />
          </div>
          <span className="text-white">Play</span>
        </button>
        <button
          className="uppercase border-t-2 border-r-2 border-b-2 border-gray-600 px-5 py-3 text-gray-900 flex items-center font-bold text-sm tracking-wider"
          id="pause"
          type="button"
          onClick={handlePlayback}
        >
          <div className="w-5 h-5 mr-1">
            <Pause />
          </div>
          <span>Pause</span>
        </button>
        <button
          className="uppercase border-t-2 border-r-2 border-b-2 border-gray-600 px-5 py-3 text-gray-900 flex items-center font-bold text-sm tracking-wider"
          id="reverse"
          type="button"
          onClick={handlePlayback}
        >
          <div className="w-5 h-5 mr-1">
            <Reverse />
          </div>
          <span>Reverse</span>
        </button>
        <button
          className="uppercase border-t-2 border-r-2 border-b-2 border-gray-600 rounded-tr-md rounded-br-md px-5 py-3 text-gray-900 flex items-center font-bold text-sm tracking-wider"
          id="finish"
          type="button"
          onClick={handlePlayback}
        >
          <div className="w-5 h-5 mr-1">
            <Finish />
          </div>
          <span>Finish</span>
        </button>
      </div>
      <div className="w-full rounded-lg h-64 bg-gray-200" />
    </Wrap>
  );
};

export default App;
