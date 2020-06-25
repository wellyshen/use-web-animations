import React, { FC } from "react";

import useWebAnimations, { bounce } from "../../src";
import { container, title, subtitle } from "../theme";
import { link, target } from "./styles";

const Animations: FC = () => {
  const { ref, getAnimation } = useWebAnimations<HTMLButtonElement>({
    ...bounce,
  });

  const play = () => {
    getAnimation().play();
  };

  return (
    <div css={container}>
      <h2 id="animations" css={title}>
        Animations
      </h2>
      <p css={subtitle}>
        A collection of animations for Web Animations API, based on{" "}
        <a
          css={link}
          href="http://daneden.github.io/animate.css/"
          target="_blank"
          rel="noreferrer"
        >
          Animate.css
        </a>
        .
      </p>
      <button css={target} onClick={play} type="button" ref={ref}>
        <span role="img" aria-label="icon">
          🍿
        </span>
      </button>
    </div>
  );
};

export default Animations;
