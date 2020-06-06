import React, { FC, useRef, useEffect } from "react";
import { Global, css } from "@emotion/core";
import normalize from "normalize.css";

import GitHubCorner from "../GitHubCorner";
import { root, container, title, subtitle } from "./styles";
import useWebAnimations from "../../src";

const App: FC = () => {
  // const ref = useRef();

  const { ref, animation, animate } = useWebAnimations<HTMLDivElement>({
    // ref,
    keyframes: { transform: ["rotate(0deg)", "rotate(360deg)"] },
    timing: { duration: 10000, fill: "forwards" },
    pausedAtStart: true,
    onFinish: (arg1, arg2) => {
      console.log("LOG ===> onFinish: ", arg1, arg2);
    },
    onCancel: (arg1, arg2) => {
      console.log("LOG ===> onCancel: ", arg1, arg2);
    },
  });

  console.log("LGO ===> animation: ", animation);

  useEffect(() => {
    animate(
      { transform: ["rotate(0deg)", "rotate(360deg)"] },
      { duration: 10000, fill: "forwards" }
      // true
    );
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
              animation.play();
            }}
            type="button"
          >
            Play
          </button>
          <button
            onClick={() => {
              animation.pause();
            }}
            type="button"
          >
            Pause
          </button>
          <button
            onClick={() => {
              animation.reverse();
            }}
            type="button"
          >
            Reverse
          </button>
          <button
            onClick={() => {
              animation.finish();
            }}
            type="button"
          >
            Finish
          </button>
          <button
            onClick={() => {
              animation.cancel();
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
            background: "#000",
          }}
          ref={ref}
        />
      </div>
    </>
  );
};

export default App;
