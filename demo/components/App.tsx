import React, { FC, useRef, useEffect } from "react";
import useWebAnimations from "../../src";
import Wrap from "./Wrap";

const App: FC = () => {
  // const ref = useRef();

  const { ref, playState, getAnimation, animate } = useWebAnimations<
    HTMLDivElement
  >({
    // ref,
    id: "test-1",
    // playbackRate: 2,
    // pausedAtStart: true,
    keyframes: {
      transform: ["translateX(0)", "translateX(270px)"],
      background: ["red", "blue", "green"],
    },
    timing: {
      delay: 500,
      duration: 1000,
      fill: "forwards",
      easing: "ease-out",
    },
    onReady: ({ playState: p, animate: a, animation: anim }) => {
      console.log("LOG ===> onReady: ", p, a, anim);
    },
    onUpdate: ({ playState: p, animate: a, animation: anim }) => {
      console.log("LOG ===> onUpdate: ", p, a, anim);
    },
    onFinish: ({ playState: p, animate: a, animation: anim }) => {
      console.log("LOG ===> onFinish: ", p, a, anim);
    },
  });

  console.log("LOG ===> playback: ", playState);

  useEffect(() => {
    /* animate({
      id: "test-2",
      playbackRate: 2,
      pausedAtStart: true,
      keyframes: {
        transform: ["translateX(0)", "translateX(270px)"],
        background: ["red", "blue", "green"],
      },
      timing: {
        delay: 500,
        duration: 1000,
        fill: "forwards",
        easing: "ease-out",
      },
    }); */
  }, [animate]);

  return (
    <Wrap>
      <h1>useWebAnimations</h1>
      <p>
        React hook for highly-performant and manipulable animations using Web
        Animations API.
      </p>
      <div>
        <input
          type="range"
          min="500"
          max="1500"
          step="10"
          onChange={(e) => {
            getAnimation().currentTime = parseInt(e.target.value, 10);
          }}
        />
        <button
          onClick={() => {
            // console.log("LOG ===> Play: ", getAnimation());
            getAnimation().play();
          }}
          type="button"
        >
          Play
        </button>
        <button
          onClick={() => {
            // console.log("LOG ===> Pause: ", getAnimation());
            getAnimation().pause();
          }}
          type="button"
        >
          Pause
        </button>
        <button
          onClick={() => {
            // console.log("LOG ===> Reverse: ", getAnimation());
            getAnimation().reverse();
          }}
          type="button"
        >
          Reverse
        </button>
        <button
          onClick={() => {
            // console.log("LOG ===> Finish: ", getAnimation());
            getAnimation().finish();
          }}
          type="button"
        >
          Finish
        </button>
        <button
          onClick={() => {
            // console.log("LOG ===> Cancel: ", getAnimation());
            getAnimation().cancel();
          }}
          type="button"
        >
          Cancel
        </button>
      </div>
      {/* <div>
        <div
          style={{
            width: 50,
            height: 50,
            background: "red",
            zIndex: 1,
            position: "absolute",
            opacity: 0.25,
          }}
        />
        <div
          style={{ width: 50, height: 50, background: "red", zIndex: 1 }}
          ref={ref}
        />
      </div> */}
    </Wrap>
  );
};

export default App;
