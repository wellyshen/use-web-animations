import React, { FC, useRef, useEffect } from "react";
import { Global, css } from "@emotion/core";
import normalize from "normalize.css";

import GitHubCorner from "../GitHubCorner";
import { root, container, title, subtitle } from "./styles";
import useWebAnimations from "../../src";

const App: FC = () => {
  // const ref = useRef();

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

  const { ref, getAnimation, animate } = useWebAnimations<HTMLDivElement>({
    // ref,
    keyframes,
    // @ts-ignore
    timing,
    pausedAtStart: true,
    onFinish: (anim, evt) => {
      console.log("LOG ===> onFinish: ", anim, evt);
    },
    onCancel: (anim, evt) => {
      console.log("LOG ===> onCancel: ", anim, evt);
    },
  });

  useEffect(() => {
    // animate(keyframes, timing);
  }, [animate, keyframes, timing]);

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
              getAnimation().play();
            }}
            type="button"
          >
            Play
          </button>
          <button
            onClick={() => {
              getAnimation().pause();
            }}
            type="button"
          >
            Pause
          </button>
          <button
            onClick={() => {
              getAnimation().reverse();
            }}
            type="button"
          >
            Reverse
          </button>
          <button
            onClick={() => {
              getAnimation().finish();
            }}
            type="button"
          >
            Finish
          </button>
          <button
            onClick={() => {
              getAnimation().cancel();
            }}
            type="button"
          >
            Cancel
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
