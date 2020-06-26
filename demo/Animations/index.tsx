import React, { FC, ChangeEvent, useState } from "react";

import useWebAnimations from "../../src";
import * as animations from "../../src/animations";
import { container, title, subtitle } from "../theme";
import { link, target, select } from "./styles";

const Animations: FC = () => {
  const [val, setVal] = useState<string>("bounce");
  const { ref, getAnimation } = useWebAnimations<HTMLButtonElement>({
    // @ts-ignore
    ...animations[val],
  });

  const play = () => {
    getAnimation().play();
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setVal(e.currentTarget.value);
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
          href="https://animate.style"
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
      <select css={select} onChange={handleChangeSelect}>
        <optgroup label="Attention Seekers">
          <option value="bounce">bounce</option>
          <option value="flash">flash</option>
          <option value="pulse">pulse</option>
          <option value="rubberBand">rubberBand</option>
          <option value="shakeX">shakeX</option>
          <option value="shakeY">shakeY</option>
          <option value="headShake">headShake</option>
          <option value="swing">swing</option>
          <option value="tada">tada</option>
          <option value="wobble">wobble</option>
          <option value="jello">jello</option>
          <option value="heartBeat">heartBeat</option>
        </optgroup>
        <optgroup label="Back entrances">
          <option value="backInDown">backInDown</option>
          <option value="backInLeft">backInLeft</option>
          <option value="backInRight">backInRight</option>
          <option value="backInUp">backInUp</option>
        </optgroup>
      </select>
    </div>
  );
};

export default Animations;
