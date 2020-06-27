import React, { FC, ChangeEvent, useState } from "react";

import useWebAnimations from "../../src";
import * as animations from "../../src/animations";
import { container, title, subtitle } from "../theme";
import { link, target, select } from "./styles";

const Animations: FC = () => {
  const [val, setVal] = useState<string>("bounce");
  // @ts-ignore
  const { keyframes, timing } = animations[val];
  const { ref, getAnimation } = useWebAnimations<HTMLButtonElement>({
    keyframes,
    timing: { ...timing, fill: "auto" },
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
        <optgroup label="Back exits">
          <option value="backOutDown">backOutDown</option>
          <option value="backOutLeft">backOutLeft</option>
          <option value="backOutRight">backOutRight</option>
          <option value="backOutUp">backOutUp</option>
        </optgroup>
        <optgroup label="Bouncing entrances">
          <option value="bounceIn">bounceIn</option>
          <option value="bounceInDown">bounceInDown</option>
          <option value="bounceInLeft">bounceInLeft</option>
          <option value="bounceInRight">bounceInRight</option>
          <option value="bounceInUp">bounceInUp</option>
        </optgroup>
        <optgroup label="Bouncing exits">
          <option value="bounceOut">bounceOut</option>
          <option value="bounceOutDown">bounceOutDown</option>
          <option value="bounceOutLeft">bounceOutLeft</option>
          <option value="bounceOutRight">bounceOutRight</option>
          <option value="bounceOutUp">bounceOutUp</option>
        </optgroup>
        <optgroup label="Fading entrances">
          <option value="fadeIn">fadeIn</option>
          <option value="fadeInDown">fadeInDown</option>
          <option value="fadeInDownBig">fadeInDownBig</option>
          <option value="fadeInLeft">fadeInLeft</option>
          <option value="fadeInLeftBig">fadeInLeftBig</option>
          <option value="fadeInRight">fadeInRight</option>
          <option value="fadeInRightBig">fadeInRightBig</option>
          <option value="fadeInUp">fadeInUp</option>
          <option value="fadeInUpBig">fadeInUpBig</option>
          <option value="fadeInTopLeft">fadeInTopLeft</option>
          <option value="fadeInTopRight">fadeInTopRight</option>
          <option value="fadeInBottomLeft">fadeInBottomLeft</option>
          <option value="fadeInBottomRight">fadeInBottomRight</option>
        </optgroup>
        <optgroup label="Fading exits">
          <option value="fadeOut">fadeOut</option>
          <option value="fadeOutDown">fadeOutDown</option>
          <option value="fadeOutDownBig">fadeOutDownBig</option>
          <option value="fadeOutLeft">fadeOutLeft</option>
          <option value="fadeOutLeftBig">fadeOutLeftBig</option>
          <option value="fadeOutRight">fadeOutRight</option>
          <option value="fadeOutRightBig">fadeOutRightBig</option>
          <option value="fadeOutUp">fadeOutUp</option>
          <option value="fadeOutUpBig">fadeOutUpBig</option>
          <option value="fadeOutTopLeft">fadeOutTopLeft</option>
          <option value="fadeOutTopRight">fadeOutTopRight</option>
          <option value="fadeOutBottomLeft">fadeOutBottomLeft</option>
          <option value="fadeOutBottomRight">fadeOutBottomRight</option>
        </optgroup>
        <optgroup label="Flippers">
          <option value="flip">flip</option>
          <option value="flipInX">flipInX</option>
          <option value="flipInY">flipInY</option>
          <option value="flipOutX">flipOutX</option>
          <option value="flipOutY">flipOutY</option>
        </optgroup>
        <optgroup label="Lightspeed">
          <option value="lightSpeedInRight">lightSpeedInRight</option>
          <option value="lightSpeedInLeft">lightSpeedInLeft</option>
          <option value="lightSpeedOutRight">lightSpeedOutRight</option>
          <option value="lightSpeedOutLeft">lightSpeedOutLeft</option>
        </optgroup>
        <optgroup label="Rotating entrances">
          <option value="rotateIn">rotateIn</option>
          <option value="rotateInDownLeft">rotateInDownLeft</option>
          <option value="rotateInDownRight">rotateInDownRight</option>
          <option value="rotateInUpLeft">rotateInUpLeft</option>
          <option value="rotateInUpRight">rotateInUpRight</option>
        </optgroup>
      </select>
    </div>
  );
};

export default Animations;
