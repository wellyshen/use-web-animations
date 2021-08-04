# <em><b>USE-WEB-ANIMATIONS</b></em>

Using [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) (a.k.a WAAPI) in the React [hook](https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook) way. Let's create highly-performant, flexible and manipulable web animations in the modern world. Hope you guys 👍🏻 it!

❤️ it? ⭐️ it on [GitHub](https://github.com/wellyshen/use-web-animations/stargazers) or [Tweet](https://twitter.com/intent/tweet?text=With%20@wellyshen/use-web-animations,%20I%20can%20build%20fancy%20and%20performant%20animations%20for%20my%20web%20app.%20Thanks,%20@Welly%20Shen%20🤩) about it.

[![build status](https://img.shields.io/github/workflow/status/wellyshen/use-web-animations/CI?style=flat-square)](https://github.com/wellyshen/use-web-animations/actions?query=workflow%3ACI)
[![coverage status](https://img.shields.io/coveralls/github/wellyshen/use-web-animations?style=flat-square)](https://coveralls.io/github/wellyshen/use-web-animations?branch=master)
[![npm version](https://img.shields.io/npm/v/@wellyshen/use-web-animations?style=flat-square)](https://www.npmjs.com/package/@wellyshen/use-web-animations)
[![npm downloads](https://img.shields.io/npm/dm/@wellyshen/use-web-animations?style=flat-square)](https://www.npmtrends.com/@wellyshen/use-web-animations)
[![npm downloads](https://img.shields.io/npm/dt/@wellyshen/use-web-animations?style=flat-square)](https://www.npmtrends.com/@wellyshen/use-web-animations)
[![gzip size](https://badgen.net/bundlephobia/minzip/@wellyshen/use-web-animations?label=gzip%20size&style=flat-square)](https://bundlephobia.com/result?p=@wellyshen/use-web-animations)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)
[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fwellyshen%2Fuse-web-animations)](https://twitter.com/intent/tweet?text=With%20@wellyshen/use-web-animations,%20I%20can%20build%20fancy%20and%20performant%20animations%20for%20my%20web%20app.%20Thanks,%20@Welly%20Shen%20🤩)

![demo_basic](https://user-images.githubusercontent.com/21308003/91186058-280b7d00-e721-11ea-8180-e739d14c7ec7.gif)

⚡️ Try yourself: https://use-web-animations.netlify.app

![demo_animate](https://user-images.githubusercontent.com/21308003/91186066-2a6dd700-e721-11ea-84c5-b2c4ff984cf5.gif)

⚡️ Try yourself: https://use-web-animations.netlify.app#animations

## Features

- 🚀 Animate on the Web with [highly-performant](https://web.dev/animations-overview/#css-js) and manipulable way, using [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).
- 🎣 Easy to use, based on React [hook](https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook).
- 🎛 Super flexible [API](#api) design that can cover [all the cases](#usage) that you need.
- 🎞 [Built-ins animations](#use-built-in-animations) for you, based on [Animate.css](https://animate.style).
- 🔩 Supports custom `refs` for [some reasons](#use-your-own-ref).
- 📜 Supports [TypeScript](https://www.typescriptlang.org) type definition.
- 🗄️ Server-side rendering compatibility.
- 🦔 Tiny size ([~ 4.4kB gzipped](https://bundlephobia.com/result?p=@wellyshen/use-web-animations)). No external dependencies, aside for the `react`.

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

> ⚠️ [Most modern browsers support Web Animations API natively](https://caniuse.com/web-animation). You can also use [polyfill](#use-polyfill) for full browser support.

### Basic Usage

Create an animation by the `keyframes` and `animationOptions` options (these are the [parameters](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate#parameters) of the `Element.animate()`).

> 💡 This hook supports the [pseudoElement](https://css-tricks.com/pseudo-elements-in-the-web-animations-api/) property via the `animationOptions` option.

[![Edit useWebAnimations - basic](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/usewebanimations-basic-nf0kd?fontsize=14&hidenavigation=1&theme=dark)

```js
import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const { ref, playState } = useWebAnimations({
    keyframes: {
      transform: "translateX(500px)", // Move by 500px
      background: ["red", "blue", "green"], // Go through three colors
    },
    animationOptions: {
      delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: 2, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    onReady: ({ playState, animate, animation }) => {
      // Triggered when the animation is ready to play
    },
    onUpdate: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the running state or changes state
    },
    onFinish: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the finished state
    },
    // More useful options...
  });

  return (
    <div className="container">
      <p>🍿 Animation is {playState}</p>
      <div className="target" ref={ref} />
    </div>
  );
};
```

For browsers that don't yet support the `onReady` and `onFinish` events, we can use the `onUpdate` to monitor the animation's state instead.

```js
let prevPending = true;

const App = () => {
  const { ref } = useWebAnimations({
    // ...
    onUpdate: ({ playState, animation: { pending } }) => {
      if (prevPending && !pending) {
        console.log("Animation is ready to play");
      }
      prevPending = pending;

      if (playState === "finished") {
        console.log("Animation has finished playing");
      }
    },
  });

  // ...
};
```

### Setting/Updating Animation

The `keyframes` and `animationOptions` are cached when the hook is mounted. However, we can set/update the animation by the `animation` method.

```js
const { animation } = useWebAnimations();

const changeAnim = () =>
  animation({
    keyframes: { transform: ["translateX(0)", "translateX(100px)"] },
    animationOptions: 1000,
    id: "123",
    playbackRate: 1,
    autoPlay: true,
  });
```

### Playback Control

The shortcoming with existing technologies was the lack of playback control. The Web Animations API provides several useful methods for controlling playback: play, pause, reverse, cancel, finish, seek, control speed via the [methods](https://developer.mozilla.org/en-US/docs/Web/API/Animation#Methods) of the **Animation** interface. This hook exposes the animation instance for us to interact with animations, we can access it by the `getAnimation()` return value.

[![Edit useWebAnimations - controls](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/usewebanimations-controls-hst8v?fontsize=14&hidenavigation=1&theme=dark)

```js
import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const { ref, playState, getAnimation } = useWebAnimations({
    playbackRate: 0.5, // Change playback rate, default is 1
    autoPlay: false, // Automatically starts the animation, default is true
    keyframes: { transform: "translateX(500px)" },
    animationOptions: { duration: 1000, fill: "forwards" },
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
import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: { transform: "translateX(500px)" },
    animationOptions: { duration: 1000, fill: "forwards" },
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

The animation instance isn't a part of [React state](https://reactjs.org/docs/hooks-state.html), which means we need to access it by the `getAnimation()` whenever we need. If you want to monitor an animation's information, here's the `onUpdate` event for you. The event is implemented by the [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) internally and the event callback is triggered when the animation enters `running` state or changes state.

```js
import { useState } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const [showEl, setShowEl] = useState(false);
  const { ref } = useWebAnimations({
    keyframes: { transform: "translateX(500px)" },
    animationOptions: { duration: 1000, fill: "forwards" },
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

We can create and play an animation at the `animationOptions` we want by the `animate` method, which is implemented based on the [Element.animate()](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate). It's useful for interactions and the [composite modes](https://css-tricks.com/additive-animation-web-animations-api).

Let's create a mouse interaction effect:

[![Edit useWebAnimations - interaction](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/usewebanimations-interaction-4jrs9?fontsize=14&hidenavigation=1&theme=dark)

```js
import { useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const { ref, animate } = useWebAnimations();

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      // The target will follow the mouse cursor
      animate({
        keyframes: { transform: `translate(${e.clientX}px, ${e.clientY}px)` },
        animationOptions: { duration: 500, fill: "forwards" },
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
import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const { ref, animate } = useWebAnimations({
    id: "fall", // Set animation id, default is empty string
    keyframes: [{ top: 0, easing: "ease-in" }, { top: "500px" }],
    animationOptions: { duration: 300, fill: "forwards" },
    onFinish: ({ animate, animation }) => {
      // Lifecycle is triggered by each animation, we can check the id to prevent animation from repeating
      if (animation.id === "bounce") return;

      animate({
        id: "bounce",
        keyframes: [
          { top: "500px", easing: "ease-in" },
          { top: "10px", easing: "ease-out" },
        ],
        animationOptions: { duration: 300, composite: "add" },
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
const { keyframes, animationOptions } = bounce;
const { ref } = useWebAnimations({
  keyframes,
  animationOptions: {
    ...animationOptions,
    delay: 1000, // Delay 1s
    duration: animationOptions.duration * 0.75, // Speed up the animation
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

## Working in TypeScript

This hook supports [TypeScript](https://www.typescriptlang.org), you can tell the hook what type of element you are going to animate through the [generic type](https://www.typescriptlang.org/docs/handbook/generics.html):

```ts
const App = () => {
  const { ref } = useWebAnimations<HTMLDivElement>();

  return <div ref={ref} />;
};
```

> 💡 For more available types, please [check it out](src/use-web-animations.d.ts).

## API

```js
const returnObj = useWebAnimations(options?: object);
```

### Return Object

It's returned with the following properties.

| Key            | Type                | Default | Description                                                                                                                                                                                                 |
| -------------- | ------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`          | object              |         | Used to set the target element for animating.                                                                                                                                                               |
| `playState`    | string \| undefined |         | Describes the [playback state](https://developer.mozilla.org/en-US/docs/Web/API/Animation/playState#value) of an animation.                                                                                 |
| `getAnimation` | function            |         | Access the [animation instance](https://developer.mozilla.org/en-US/docs/Web/API/Animation) for [playback control](#playback-control), [animation's information](#getting-animations-information) and more. |
| `animate`      | function            |         | Imperatively [set/update the animation](#settingupdating-animation). Useful for [interactive animations and composite animations](#dynamic-interactions-with-animation).                                    |

### Parameter

The `options` provides the following configurations and event callbacks for you.

| Key                | Type             | Default | Description                                                                                                                                                                          |
| ------------------ | ---------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ref`              | object           |         | For [some reasons](#use-your-own-ref), you can pass in your own ref instead of using the built-in.                                                                                   |
| `id`               | string           | `""`    | Sets the ID of an animation, implemented based on the [Animation.id](https://developer.mozilla.org/en-US/docs/Web/API/Animation/id).                                                 |
| `playbackRate`     | number           | `1`     | Sets the playback rate of an animation, implemented based on the [Animation.playbackRate](https://developer.mozilla.org/en-US/docs/Web/API/Animation/playbackRate).                  |
| `autoPlay`         | boolean          | `true`  | Automatically starts the animation.                                                                                                                                                  |
| `keyframes`        | Array \| object  |         | An array of keyframe objects, or a keyframe object whose property are arrays of values to iterate over. See [basic usage](#basic-usage) for more details.                            |
| `animationOptions` | number \| object |         | An **integer** representing the animation's duration (in milliseconds), or an **object** containing one or more timing properties. See [basic usage](#basic-usage) for more details. |

| `onReady` | function | | It's invoked when an animation is ready to play. You can access the [playState](#basic-usage), [animate](#dynamic-interactions-with-animation) and [animation](#getting-animations-information) from the event object. |
| `onUpdate` | function | | It's invoked when an animation enters the `running` state or changes state. You can access the [playState](#basic-usage), [animate](#dynamic-interactions-with-animation) and [animation](#getting-animations-information) from the event object. |
| `onFinish` | function | | It's invoked when an animation enters the `finished` state. You can access the [playState](#basic-usage), [animate](#dynamic-interactions-with-animation) and [animation](#getting-animations-information) from the event object. |

## Use Polyfill

[Web Animations API has good support amongst browsers](https://caniuse.com/web-animation), but it's not universal. You'll need to polyfill browsers that don't support it. Polyfills is something you should do consciously at the application level. Therefore `use-web-animations` doesn't include it.

Install [web-animations-js](https://github.com/web-animations/web-animations-js):

```sh
$ yarn add web-animations-js
# or
$ npm install --save web-animations-js
```

Then import it at your app's entry point:

```js
import "web-animations-js/web-animations.min";
```

You can read the [document](https://github.com/web-animations/web-animations-js/blob/dev/docs/support.md) for more information.

## Articles / Blog Posts

> 💡 If you have written any blog post or article about `use-web-animations`, please open a PR to add it here.

- Featured on [React Status #196](https://react.statuscode.com/issues/196).
- Featured on [JavaScript Weekly #496](https://javascriptweekly.com/issues/496).
- Featured on [React Newsletter #218](https://reactnewsletter.com/issues/218).

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
