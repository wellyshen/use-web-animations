import type { FC, ChangeEvent } from "react";
import useWebAnimations, * as animations from "@wellyshen/use-web-animations";

import styles from "./styles.module.scss";

const Animations: FC = () => {
  const { bounce } = animations;
  const { ref, getAnimation, animate } = useWebAnimations<HTMLDivElement>({
    keyframes: bounce.keyframes,
    animationOptions: { ...bounce.animationOptions, fill: "auto" },
  });

  const play = () => {
    getAnimation()?.play();
  };

  const handleChangeSelect = ({
    currentTarget,
  }: ChangeEvent<HTMLSelectElement>) => {
    // @ts-ignore
    const { keyframes, animationOptions } = animations[currentTarget.value];

    animate({
      keyframes,
      animationOptions: { ...animationOptions, fill: "auto" },
    });
  };

  return (
    <div className={styles.container}>
      <h2 id="animations" className={styles.title}>
        ANIMATIONS
      </h2>
      <p className={styles.subtitle}>
        A collection of animations for Web Animations API, based on{" "}
        <a
          className={styles.link}
          href="https://animate.style"
          target="_blank"
          rel="noreferrer"
        >
          Animate.className
        </a>
        .
      </p>
      <div
        className={styles.target}
        ref={ref}
        onClick={play}
        onKeyPress={play}
        role="button"
        tabIndex={0}
      >
        <span role="img" aria-label="icon">
          🍿
        </span>
      </div>
      <select className={styles.select} onChange={handleChangeSelect}>
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
        <optgroup label="Rotating exits">
          <option value="rotateOut">rotateOut</option>
          <option value="rotateOutDownLeft">rotateOutDownLeft</option>
          <option value="rotateOutDownRight">rotateOutDownRight</option>
          <option value="rotateOutUpLeft">rotateOutUpLeft</option>
          <option value="rotateOutUpRight">rotateOutUpRight</option>
        </optgroup>
        <optgroup label="Specials">
          <option value="hinge">hinge</option>
          <option value="jackInTheBox">jackInTheBox</option>
          <option value="rollIn">rollIn</option>
          <option value="rollOut">rollOut</option>
        </optgroup>
        <optgroup label="Zooming entrances">
          <option value="zoomIn">zoomIn</option>
          <option value="zoomInDown">zoomInDown</option>
          <option value="zoomInLeft">zoomInLeft</option>
          <option value="zoomInRight">zoomInRight</option>
          <option value="zoomInUp">zoomInUp</option>
        </optgroup>
        <optgroup label="Zooming exits">
          <option value="zoomOut">zoomOut</option>
          <option value="zoomOutDown">zoomOutDown</option>
          <option value="zoomOutLeft">zoomOutLeft</option>
          <option value="zoomOutRight">zoomOutRight</option>
          <option value="zoomOutUp">zoomOutUp</option>
        </optgroup>
        <optgroup label="Sliding entrances">
          <option value="slideInDown">slideInDown</option>
          <option value="slideInLeft">slideInLeft</option>
          <option value="slideInRight">slideInRight</option>
          <option value="slideInUp">slideInUp</option>
        </optgroup>
        <optgroup label="Sliding exits">
          <option value="slideOutDown">slideOutDown</option>
          <option value="slideOutLeft">slideOutLeft</option>
          <option value="slideOutRight">slideOutRight</option>
          <option value="slideOutUp">slideOutUp</option>
        </optgroup>
      </select>
    </div>
  );
};

export default Animations;
