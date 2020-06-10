import React, { FC, useRef, useEffect } from "react";
import { Global, css } from "@emotion/core";
import normalize from "normalize.css";

import GitHubCorner from "../GitHubCorner";
import { root, container, title, subtitle } from "./styles";
import useWebAnimations from "../../src";

const keyframes = {
  transform: ["rotate(0deg)", "rotate(360deg)"],
  background: ["red", "blue", "green"],
};
const timing = {
  delay: 500,
  duration: 1000,
  iterations: 2,
  direction: "alternate",
  easing: "ease-in-out",
};

const App: FC = () => {
  // const ref = useRef();

  const { ref, getAnimation, animate } = useWebAnimations<HTMLDivElement>({
    // ref,
    keyframes,
    // @ts-ignore
    timing,
    pausedAtStart: true,
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
    // animate(keyframes, timing);
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
              getAnimation().currentTime =
                getAnimation().effect.getTiming().duration / 2 + 500;
            }}
            type="button"
          >
            Seek
          </button>
        </div>
        <div
          style={{
            marginTop: "5rem",
            width: "100px",
            height: "100px",
            background: "red",
          }}
          ref={ref}
        />
      </div>
    </>
  );
};

export default App;
