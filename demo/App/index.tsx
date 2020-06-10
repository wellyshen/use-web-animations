import React, { FC, useRef, useEffect } from "react";
import { Global, css } from "@emotion/core";
import normalize from "normalize.css";

import GitHubCorner from "../GitHubCorner";
import { root, container, title, subtitle, frame, target } from "./styles";
import useWebAnimations from "../../src";

const App: FC = () => {
  // const ref = useRef();

  const { ref, getAnimation, animate } = useWebAnimations<HTMLDivElement>({
    // ref,
    keyframes: {
      transform: ["translateX(0)", "translateX(270px)"],
      background: ["red", "blue", "green"],
    },
    timing: {
      delay: 500,
      duration: 1000,
      fill: "forwards",
      easing: "ease-in-out",
    },
    // pausedAtStart: true,
    onReady: (anim) => {
      console.log("LOG ===> onReady: ", anim);
    },
    onUpdate: (anim) => {
      console.log("LOG ===> onUpdate: ", anim);
    },
    onFinish: (anim) => {
      console.log("LOG ===> onFinish: ", anim);
    },
  });

  useEffect(() => {
    /* animate(
      {
        transform: ["translateX(0)", "translateX(270px)"],
        background: ["red", "blue", "green"],
      },
      {
        delay: 500,
        duration: 1000,
        fill: "forwards",
        easing: "ease-in-out",
      }
    ); */
  }, [animate]);

  return (
    <>
      <Global
        styles={css`
          ${normalize}
          ${root}
        `}
      />
      <div css={container}>
        <GitHubCorner url="https://github.com/wellyshen/use-web-animations" />
        <h1 css={title}>useWebAnimations</h1>
        <p css={subtitle}>
          React hook for highly-performant and manipulable animations using Web
          Animations API.
        </p>
        <div>
          <button
            onClick={() => {
              console.log("LOG ===> Play: ", getAnimation());
              getAnimation().play();
            }}
            type="button"
          >
            Play
          </button>
          <button
            onClick={() => {
              console.log("LOG ===> Pause: ", getAnimation());
              getAnimation().pause();
            }}
            type="button"
          >
            Pause
          </button>
          <button
            onClick={() => {
              console.log("LOG ===> Reverse: ", getAnimation());
              getAnimation().reverse();
            }}
            type="button"
          >
            Reverse
          </button>
          <button
            onClick={() => {
              console.log("LOG ===> Finish: ", getAnimation());
              getAnimation().finish();
            }}
            type="button"
          >
            Finish
          </button>
          <button
            onClick={() => {
              console.log("LOG ===> Cancel: ", getAnimation());
              getAnimation().cancel();
            }}
            type="button"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log("LOG ===> Seek: ", getAnimation());
              getAnimation().currentTime = 950;
            }}
            type="button"
          >
            Seek
          </button>
        </div>
        <div css={frame}>
          <div css={target} ref={ref} />
        </div>
      </div>
    </>
  );
};

export default App;
