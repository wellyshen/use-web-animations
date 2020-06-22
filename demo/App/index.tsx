import React, { FC } from "react";
import { Global, css } from "@emotion/core";
import normalize from "normalize.css";

import GitHubCorner from "../GitHubCorner";
import {
  root,
  container,
  title,
  subtitle,
  mask,
  block,
  text,
  heart,
} from "./styles";
import useWebAnimations from "../../src";

const App: FC = () => {
  const { ref: blockRef } = useWebAnimations<HTMLDivElement>({
    keyframes: { width: ["0", "100%", "0"], left: ["0", "0", "100%"] },
    timing: {
      duration: 2000,
      fill: "forwards",
      easing: "cubic-bezier(0.74, 0.06, 0.4, 0.92)",
    },
  });
  const { ref: textRef } = useWebAnimations<HTMLDivElement>({
    keyframes: { opacity: ["0", "1"] },
    timing: {
      delay: 1600,
      duration: 1000,
      fill: "forwards",
    },
  });
  const { ref: heartRef } = useWebAnimations<HTMLDivElement>({
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
        <div css={mask}>
          <div css={block} ref={blockRef} />
          <span css={text} ref={textRef}>
            BLACK LIVES MATTER
          </span>
          <span css={heart} ref={heartRef}>
            ❤
          </span>
        </div>
      </div>
    </>
  );
};

export default App;
