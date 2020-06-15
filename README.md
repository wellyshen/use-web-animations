> 🚧 This package is in-progress, **DON'T USE IT NOW**. Because API may be changed frequently, if you're willing to be the early user, please note any change via the [release](https://github.com/wellyshen/use-web-animations/releases). Here's the [milestone](#milestone).

# useWebAnimations

Using [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) (a.k.a WAAPI) in the React [hook](https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook) way. Let's create highly-performant, flexible and manipulable web animations in the modern world!

[![build status](https://img.shields.io/github/workflow/status/wellyshen/use-web-animations/CI?style=flat-square)](https://github.com/wellyshen/use-web-animations/actions?query=workflow%3ACI)
[![npm version](https://img.shields.io/npm/v/@wellyshen/use-web-animations?style=flat-square)](https://www.npmjs.com/package/@wellyshen/use-web-animations)
[![npm downloads](https://img.shields.io/npm/dm/@wellyshen/use-web-animations?style=flat-square)](https://www.npmtrends.com/@wellyshen/use-web-animations)
[![npm downloads](https://img.shields.io/npm/dt/@wellyshen/use-web-animations?style=flat-square)](https://www.npmtrends.com/@wellyshen/use-web-animations)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@wellyshen/use-web-animations?style=flat-square)](https://bundlephobia.com/result?p=@wellyshen/use-web-animations)
[![MIT licensed](https://img.shields.io/github/license/wellyshen/use-web-animations?style=flat-square)](https://raw.githubusercontent.com/wellyshen/use-web-animations/master/LICENSE)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](https://github.com/wellyshen/use-web-animations/blob/master/CONTRIBUTING.md)
[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fwellyshen%2Fuse-web-animations)](https://twitter.com/intent/tweet?text=With%20@wellyshen/use-web-animations,%20I%20can%20build%20fancy%20and%20performant%20animations%20for%20my%20web%20app.%20Thanks,%20@Welly%20Shen%20🤩)

## Milestone

- [x] Basic animation with keyframes and timing.
- [x] Animation event callbacks.
- [x] Pause animation at start.
- [x] Set animation whenever you want.
- [x] Expose play-state as a return value.
- [x] Server-side compatibility.
- [ ] Unit testing.
- [x] TypeScript type definition.
- [ ] Demo app.
- [ ] Demo code.
- [ ] Documentation.

## Features

Coming soon...

## Browser Support

The features of [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) still being [implemented by modern browsers](https://caniuse.com/#feat=web-animation), therefore we built-in a [handy polyfill](https://github.com/web-animations/web-animations-js) for you. The polyfill falls back to the native implementation when a feature is available.

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="32px" height="32px" /><br/>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="32px" height="32px" /><br/>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="32px" height="32px" /><br/>IE / Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="32px" height="32px" /><br/>Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="32px" height="32px" /><br/>iOS Safari |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                            56+                                                                            |                                                                              27+                                                                              |                                                                         IE10+, Edge                                                                         |                                                                            9+                                                                             |                                                                                   7.1+                                                                                    |

> ⚠️ Please note, some features aren't supported before Google Chrome v84, like on-ready event, partial keyframes etc. Read the [article](https://web.dev/web-animations) to learn more.

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

Create a spinning animation by the `keyframes` ([formats](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)) and `timing` ([properties](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming)) options.

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
    onReady: (animation) => {
      // Triggered when the animation is ready to play
    },
    onUpdate: (animation) => {
      // Triggered whenever the animation enters the running state or changes state
    },
    onFinish: (animation) => {
      // Triggered whenever the animation enters the finished state
    },
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

```js
import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const { ref, playState, getAnimation } = useWebAnimations({
    pausedAtStart: true, // Pause animation at start, default is false
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
    const time = parseInt(e.target.value, 10);
    getAnimation().currentTime = time;
  };

  const updatePlaybackRate = (e) => {
    const rate = parseInt(e.target.value, 10);
    getAnimation().updatePlaybackRate(rate);
  };

  return (
    <div className="container">
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reverse}>Reverse</button>
      <button onClick={cancel}>Cancel</button>
      <button onClick={finish}>Finish</button>
      <input type="range" max="300" step="10" onChange={seek} />
      <input type="number" value="1" onChange={updatePlaybackRate} />
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

  const JumpToHalf = () => {
    const animation = getAnimation();
    animation.currentTime = animation.effect.getTiming().duration / 2;
  };

  return (
    <div className="container">
      <button onClick={speedUp}>Speed Up</button>
      <button onClick={JumpToHalf}>Jump to Half</button>
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
    onUpdate: (animation) => {
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

## API

Coming soon...

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
