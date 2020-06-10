> 🚧 This package is in-progress, **don't use it now**. Because API may be changed frequently, if you're willing to be the early user, please note any change via [release](https://github.com/wellyshen/use-web-animations/releases). Here's the [milestone](#milestone).

# useWebAnimations

Using [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) (a.k.a WAAPI) in the React [hook](https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook) way. Let's create highly-performant, flexible and manipulable animations in the modern web world 🛸

## Milestone

- [x] Basic animation with keyframes and timing.
- [x] Animation event callbacks.
- [x] Pause animation at start.
- [x] Set animation whenever you want.
- [x] Expose play-state as a return value.
- [ ] Waiting for Google Chrome v84 for supporting more functions (see the [article](https://web.dev/web-animations))
- [ ] Server-side compatibility.
- [ ] Unit testing.
- [x] TypeScript type definition.
- [ ] Demo app.
- [ ] Demo code.
- [ ] Documentation.

## Browser Support

The features of [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) still being [implemented by modern browsers](https://caniuse.com/#feat=web-animation), therefore we built-in a [handy polyfill](https://github.com/web-animations/web-animations-js) for you. The polyfill falls back to the native implementation when a feature is available.

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="32px" height="32px" /><br/>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="32px" height="32px" /><br/>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="32px" height="32px" /><br/>IE / Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="32px" height="32px" /><br/>Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="32px" height="32px" /><br/>iOS Safari |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                            56+                                                                            |                                                                              27+                                                                              |                                                                         IE10+, Edge                                                                         |                                                                            9+                                                                             |                                                                                   7.1+                                                                                    |

## Requirement

To use `use-web-animations`, you must use `react@16.8.0` or greater which includes hooks.

## Installation

This package is distributed via [npm](https://www.npmjs.com/package/@welly/use-web-animations).

```sh
$ yarn add @welly/use-web-animations
# or
$ npm install --save @welly/use-web-animations
```

## Before We Start

With the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API), we can move interactive animations from stylesheets to JavaScript, separating presentation from behavior. The API was designed based on the concept of the [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) but there're still some differences between them. I strongly recommend you to read the [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) before we dive into this hook.

## Usage

The [API](#api) design of the hook not only inherits the DX of the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) but also provides useful features and sugar events to us. Here are some examples to show you how does it work.

### Basic Usage

Create a spinning animation by the `keyframes` ([formats](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)) and `timing` ([properties](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming)) options.

```js
import React from "react";
import useWebAnimations from "@welly/use-web-animations";

const App = () => {
  const { ref, playState } = useWebAnimations({
    keyframes: {
      transform: ["translateX(300px)"], // Move by 300px
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

## API

Coming soon...
