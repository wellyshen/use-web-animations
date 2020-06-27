# useWebAnimations

Using [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) (a.k.a WAAPI) in the React [hook](https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook) way. Let's create highly-performant, flexible and manipulable web animations in the modern world. Hope you guys 👍🏻 it!

❤️ it? ⭐️ it on [GitHub](https://github.com/wellyshen/use-web-animations/stargazers) or [Tweet](https://twitter.com/intent/tweet?text=With%20@wellyshen/use-web-animations,%20I%20can%20build%20fancy%20and%20performant%20animations%20for%20my%20web%20app.%20Thanks,%20@Welly%20Shen%20🤩) about it.

[![build status](https://img.shields.io/github/workflow/status/wellyshen/use-web-animations/CI?style=flat-square)](https://github.com/wellyshen/use-web-animations/actions?query=workflow%3ACI)
[![npm version](https://img.shields.io/npm/v/@wellyshen/use-web-animations?style=flat-square)](https://www.npmjs.com/package/@wellyshen/use-web-animations)
[![npm downloads](https://img.shields.io/npm/dm/@wellyshen/use-web-animations?style=flat-square)](https://www.npmtrends.com/@wellyshen/use-web-animations)
[![npm downloads](https://img.shields.io/npm/dt/@wellyshen/use-web-animations?style=flat-square)](https://www.npmtrends.com/@wellyshen/use-web-animations)
[![MIT licensed](https://img.shields.io/github/license/wellyshen/use-web-animations?style=flat-square)](https://raw.githubusercontent.com/wellyshen/use-web-animations/master/LICENSE)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](https://github.com/wellyshen/use-web-animations/blob/master/CONTRIBUTING.md)
[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fwellyshen%2Fuse-web-animations)](https://twitter.com/intent/tweet?text=With%20@wellyshen/use-web-animations,%20I%20can%20build%20fancy%20and%20performant%20animations%20for%20my%20web%20app.%20Thanks,%20@Welly%20Shen%20🤩)

![demo](https://user-images.githubusercontent.com/21308003/85407583-f564cd00-b595-11ea-968a-b436ae56cd14.gif)

⚡️ Try yourself: https://use-web-animations.netlify.app

## Features

- 🚀 Animate on the Web with highly-performant and manipulable way, using [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).
- 🎣 Easy to use, based on React [hook](https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook).
- 🧸 Built-ins [polyfill](https://github.com/web-animations/web-animations-js) for better [browser compatibility](#browser-support).
- 🎛 Super flexible [API](#api) design which can cover [all the cases](#usage) that you need.
- 🎞 [Built-ins animations](#use-built-in-animations) for you, based on [Animate.css](https://animate.style).
- 🔩 Supports custom `refs` for [some reasons](#use-your-own-ref).
- 📜 Supports [TypeScript](https://www.typescriptlang.org) type definition.
- 🗄️ Server-side rendering compatibility.

## Browser Support

The features of [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) still being [implemented by modern browsers](https://caniuse.com/#feat=web-animation), therefore we built-in a [handy polyfill](https://github.com/web-animations/web-animations-js) for you. The polyfill falls back to the native implementation when a feature is available.

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="32px" height="32px" /><br/>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="32px" height="32px" /><br/>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="32px" height="32px" /><br/>IE / Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="32px" height="32px" /><br/>Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="32px" height="32px" /><br/>iOS Safari |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                            56+                                                                            |                                                                              27+                                                                              |                                                                         IE10+, Edge                                                                         |                                                                            9+                                                                             |                                                                                   7.1+                                                                                    |

> ⚠️ Please note, some features aren't supported before Google Chrome v84, like partial keyframes, composite mode, ready and finished events etc. Read the [article](https://web.dev/web-animations) to learn more.

## Requirement

To use `use-web-animations`, you must use `react@16.8.0` or greater which includes hooks.

## Installation

This package is distributed via [npm](https://www.npmjs.com/package/@wellyshen/use-web-animations).

```sh
$ yarn add @wellyshen/use-web-animations
# or
$ npm install --save @wellyshen/use-web-animations
```

## Before We Start

With the Web Animations API, we can move interactive animations from stylesheets to JavaScript, separating presentation from behavior. The API was designed based on the concept of the [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) but there're still some differences between them. I strongly recommend you to read the [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) before we dive into this hook.

## Usage

The [API](#api) design of the hook not only inherits the DX of the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) but also provides useful features and sugar events to us. Here are some examples to show you how does it work.

### Basic Usage

Create an animation by the `keyframes` ([formats](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)) and `timing` ([properties](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming)) options.

[![Edit useWebAnimations - basic](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/usewebanimations-basic-nf0kd?fontsize=14&hidenavigation=1&theme=dark)

```js
import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const { ref, playState } = useWebAnimations({
    keyframes: {
      transform: ["translateX(500px)"], // Move by 500px
      background: ["red", "blue", "green"], // Go through three colors
    },
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: 2, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    onReady: ({ playState, animate, animation }) => {
      // Triggered when the animation is ready to play (Google Chrome: available in v84+)
    },
    onUpdate: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the running state or changes state
    },
    onFinish: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
    },
    // More useful options...
  });

  return (
    <div className="container">
      <p>🎞️ Animation is {playState}</p>
      <div className="target" ref={ref} />
    </div>
  );
};
```

### Playback Control

The shortcoming with existing technologies was the lack of playback control. The Web Animations API provides several useful methods for controlling playback: play, pause, reverse, cancel, finish, seek, control speed via the [methods](https://developer.mozilla.org/en-US/docs/Web/API/Animation#Methods) of the **Animation** interface. This hook exposes the animation instance for us to interact with animations, we can access it by the `getAnimation()` return value.

[![Edit useWebAnimations - controls](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/usewebanimations-controls-hst8v?fontsize=14&hidenavigation=1&theme=dark)

```js
import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const { ref, playState, getAnimation } = useWebAnimations({
    playbackRate: 0.5, // Change playback rate, default is 1
    autoPlay: false, // Automatically starts the animation, default is true
    keyframes: { transform: ["translateX(500px)"] },
    timing: { duration: 1000, fill: "forwards" },
  });

  const play = () => {
    getAnimation().play();
  };

  const pause = () => {
    getAnimation().pause();
  };

  const reverse = () => {
    getAnimation().reverse();
  };

  const cancel = () => {
    getAnimation().cancel();
  };

  const finish = () => {
    getAnimation().finish();
  };

  const seek = (e) => {
    const animation = getAnimation();
    const time = (animation.effect.getTiming().duration / 100) * e.target.value;
    animation.currentTime = time;
  };

  const updatePlaybackRate = (e) => {
    getAnimation().updatePlaybackRate(e.target.value);
  };

  return (
    <div className="container">
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reverse}>Reverse</button>
      <button onClick={cancel}>Cancel</button>
      <button onClick={finish}>Finish</button>
      <input type="range" onChange={seek} />
      <input type="number" defaultValue="1" onChange={updatePlaybackRate} />
      <div className="target" ref={ref} />
    </div>
  );
};
```

### Getting Animation's Information

When using the Web Animations API, we can get the information of an animation via the [properties](https://developer.mozilla.org/en-US/docs/Web/API/Animation#Properties) of the **Animation** interface. However, we can get the information of an animation by the `getAnimation()` return value as well.

```js
import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: { transform: ["translateX(500px)"] },
    timing: { duration: 1000, fill: "forwards" },
  });

  const speedUp = () => {
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate * 0.25);
  };

  const jumpToHalf = () => {
    const animation = getAnimation();
    animation.currentTime = animation.effect.getTiming().duration / 2;
  };

  return (
    <div className="container">
      <button onClick={speedUp}>Speed Up</button>
      <button onClick={jumpToHalf}>Jump to Half</button>
      <div className="target" ref={ref} />
    </div>
  );
};
```

The animation instance isn't a part of [React state](https://reactjs.org/docs/hooks-state.html), which means we need to access it by the `getAnimation()` whenever we need. If you want to monitor an animation's information, here's the `onUpdate` event for you. The event is implemented by the [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) internally and the event callback is triggered when the `animation.playState` is running or changes.

```js
import React, { useState } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const [showEl, setShowEl] = useState(false);
  const { ref } = useWebAnimations({
    keyframes: { transform: ["translateX(500px)"] },
    timing: { duration: 1000, fill: "forwards" },
    onUpdate: ({ animation }) => {
      if (animation.currentTime > animation.effect.getTiming().duration / 2)
        setShowEl(true);
    },
  });

  return (
    <div className="container">
      {showEl && <div className="some-element" />}
      <div className="target" ref={ref} />
    </div>
  );
};
```

### Dynamic Interactions with Animation

We can create and play an animation at the timing we want by the `animate()` return value, which is implemented based on the [Element.animate()](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate). It's useful for interactions and the [composite modes](https://css-tricks.com/additive-animation-web-animations-api).

Let's create a mouse interaction effect:

[![Edit useWebAnimations - interaction](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/usewebanimations-interaction-4jrs9?fontsize=14&hidenavigation=1&theme=dark)

```js
import React, { useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const { ref, animate } = useWebAnimations();

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      // The target will follow the mouse cursor
      animate({
        keyframes: { transform: `translate(${e.clientX}px, ${e.clientY}px)` },
        timing: { duration: 500, fill: "forwards" },
      });
    });
  }, [animate]);

  return (
    <div className="container">
      <div className="target" ref={ref} />
    </div>
  );
};
```

Create a bounce effect via lifecycle and composite mode:

```js
import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const { ref, animate } = useWebAnimations({
    id: "fall", // Set animation id, default is empty string
    keyframes: [{ top: 0, easing: "ease-in" }, { top: "500px" }],
    timing: { duration: 300, fill: "forwards" },
    onFinish: ({ animate, animation }) => {
      // Lifecycle is triggered by each animation, we can check the id to prevent animation from repeating
      if (animation.id === "bounce") return;

      animate({
        id: "bounce",
        keyframes: [
          { top: "500px", easing: "ease-in" },
          { top: "10px", easing: "ease-out" },
        ],
        timing: { duration: 300, composite: "add" },
      });
    },
  });

  return (
    <div className="container">
      <div className="target" ref={ref} />
    </div>
  );
};
```

> ⚠️ Composite modes isn't fully supported by all the browsers, please check the [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/composite#Browser_compatibility) carefully before using it.

## Use Built-in Animations

Too lazy to think about animation? We provide a collection of ready-to-use animations for you, they are implemented based on [Animate.css](https://animate.style).

👉🏻 [Check out the demo](https://use-web-animations.netlify.app#animations).

```js
import React from "react";
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";

const App = () => {
  // Add a pre-defined effect to the target
  const { ref } = useWebAnimations({ ...bounce });

  return (
    <div className="container">
      <div className="target" ref={ref} />
    </div>
  );
};
```

We can customize the built-in animation by overriding its properties:

```js
const { keyframes, timing } = bounce;
const { ref } = useWebAnimations({
  keyframes,
  timing: {
    ...timing,
    delay: 1000, // Delay 1s
    duration: timing.duration * 0.75, // Speed up the animation
  },
});
```

<details>
<summary>See all available animations</summary>

#### Attention seekers

- bounce
- flash
- pulse
- rubberBand
- shakeX
- shakeY
- headShake
- swing
- tada
- wobble
- jello
- heartBeat

#### Back entrances

- backInDown
- backInLeft
- backInRight
- backInUp

#### Back exits

- backOutDown
- backOutLeft
- backOutRight
- backOutUp

#### Bouncing entrances

- bounceIn
- bounceInDown
- bounceInLeft
- bounceInRight
- bounceInUp

#### Bouncing exits

- bounceOut
- bounceOutDown
- bounceOutLeft
- bounceOutRight
- bounceOutUp

#### Fading entrances

- fadeIn
- fadeInDown
- fadeInDownBig
- fadeInLeft
- fadeInLeftBig
- fadeInRight
- fadeInRightBig
- fadeInUp
- fadeInUpBig
- fadeInTopLeft
- fadeInTopRight
- fadeInBottomLeft
- fadeInBottomRight

#### Fading exits

- fadeOut
- fadeOutDown
- fadeOutDownBig
- fadeOutLeft
- fadeOutLeftBig
- fadeOutRight
- fadeOutRightBig
- fadeOutUp
- fadeOutUpBig
- fadeOutTopLeft
- fadeOutTopRight
- fadeOutBottomLeft
- fadeOutBottomRight

#### Flippers

- flip
- flipInX
- flipInY
- flipOutX
- flipOutY

#### Lightspeed

- lightSpeedInRight
- lightSpeedInLeft
- lightSpeedOutRight
- lightSpeedOutLeft

#### Rotating entrances

- rotateIn
- rotateInDownLeft
- rotateInDownRight
- rotateInUpLeft
- rotateInUpRight

#### Rotating exits

- rotateOut
- rotateOutDownLeft
- rotateOutDownRight
- rotateOutUpLeft
- rotateOutUpRight

#### Specials

- hinge
- jackInTheBox
- rollIn
- rollOut

#### Zooming entrances

- zoomIn
- zoomInDown
- zoomInLeft
- zoomInRight
- zoomInUp

#### Zooming exits

- zoomOut
- zoomOutDown
- zoomOutLeft
- zoomOutRight
- zoomOutUp

#### Sliding entrances

- slideInDown
- slideInLeft
- slideInRight
- slideInUp

#### Sliding exits

- slideOutDown
- slideOutLeft
- slideOutRight
- slideOutUp
</details>

## Use Your Own `ref`

In case of you had a ref already or you want to share a ref for other purposes. You can pass in the ref instead of using the one provided by this hook.

```js
const ref = useRef();
const { playState } = useWebAnimations({ ref });
```

## API

```js
const returnObj = useWebAnimations(options?: object);
```

### Return Object

It's returned with the following properties.

| Key            | Type     | Default | Description                                                                                                                                                                                                 |
| -------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`          | object   |         | Used to set the target element for animating.                                                                                                                                                               |
| `playState`    | string   |         | Describes the playback state of an animation.                                                                                                                                                               |
| `getAnimation` | function |         | Access the [animation instance](https://developer.mozilla.org/en-US/docs/Web/API/Animation) for [playback control](#playback-control), [animation's information](#getting-animations-information) and more. |
| `animate`      | function |         | Creates animation at the timing you want. Useful for [interactive animations and composite animations](#dynamic-interactions-with-animation).                                                               |

### Parameter

The `options` provides the following configurations and event callbacks for you.

| Key            | Type             | Default | Description                                                                                                                                                                                                                                                                                                                                    |
| -------------- | ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`          | object           |         | For [some reasons](#use-your-own-ref), you can pass in your own ref instead of using the built-in.                                                                                                                                                                                                                                             |
| `id`           | string           | `""`    | Sets the ID of an animation, implemented based on the [Animation.id](https://developer.mozilla.org/en-US/docs/Web/API/Animation/id).                                                                                                                                                                                                           |
| `playbackRate` | number           | `1`     | Sets the playback rate of an animation, implemented based on the [Animation.playbackRate](https://developer.mozilla.org/en-US/docs/Web/API/Animation/playbackRate).                                                                                                                                                                            |
| `autoPlay`     | boolean          | `true`  | Automatically starts the animation.                                                                                                                                                                                                                                                                                                            |
| `keyframes`    | Array \| object  |         | Describes sets of animatable properties and values, similar to CSS [@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) but slightly different. See [Keyframe Formats](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) for more details.                                            |
| `timing`       | number \| object |         | Describes timing properties for animation effects. See [EffectTiming](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming) for more details.                                                                                                                                                                                         |
| `onReady`      | function         |         | It's invoked when an animation is ready to play. You can access the [playState](#basic-usage), [animate](#dynamic-interactions-with-animation) and [animation](#getting-animations-information) from the event object. (Google Chrome: [available in v84+](https://web.dev/web-animations/#orchestrating-animations-with-promises))            |
| `onUpdate`     | function         |         | It's invoked when an animation enters the `running` state or changes state. You can access the [playState](#basic-usage), [animate](#dynamic-interactions-with-animation) and [animation](#getting-animations-information) from the event object.                                                                                              |
| `onFinish`     | function         |         | It's invoked when an animation enters the `finished` state. You can access the [playState](#basic-usage), [animate](#dynamic-interactions-with-animation) and [animation](#getting-animations-information) from the event object. (Google Chrome: [available in v84+](https://web.dev/web-animations/#orchestrating-animations-with-promises)) |

## To Do

- [ ] Testing.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://wellyshen.com"><img src="https://avatars1.githubusercontent.com/u/21308003?v=4" width="100px;" alt=""/><br /><sub><b>Welly</b></sub></a><br /><a href="https://github.com/wellyshen/use-web-animations/commits?author=wellyshen" title="Code">💻</a> <a href="https://github.com/wellyshen/use-web-animations/commits?author=wellyshen" title="Documentation">📖</a> <a href="#maintenance-wellyshen" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
