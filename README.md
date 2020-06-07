> 🚧 This package is in-progress, **don't use it now**. Because API may be changed frequently, if you're willing to be the early user, please note any change via [release](https://github.com/wellyshen/use-web-animations/releases). Here's the [milestone](#milestone).

# useWebAnimations

Using [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) (a.k.a WAAPI) in the React [hook](https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook) way. Let's create highly-performant, flexible and manipulable animations in the modern web world 🛸

## Milestone

- [x] Basic animation with key-frames and timing.
- [x] Playback controller.
- [x] Animation event callbacks.
- [x] Pause animation at start.
- [x] Set animation whenever you want.
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

Create a spinning animation by the `keyframes` and `timing` options.

```js
import React from "react";
import useWebAnimations from "@welly/use-web-animations";

const App = () => {
  const { ref } = useWebAnimations({
    // Define the keyframes, rotate the target from 0 degree to 360 degree
    keyframes: { transform: ["rotate(0deg)", "rotate(360deg)"] },
    // Define the timing, the duration is in milliseconds
    timing: { duration: 3000, iterations: Infinity },
    onFinish: (animation, event) => {
      // Triggered when the animation completes naturally
      // or finished by calling the animation.finish() method
    },
    onCancel: (animation, event) => {
      // Triggered when the animation is called by calling the animation.cancel() method
    },
  });

  return (
    <div className="container">
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "green",
        }}
        ref={ref}
      />
    </div>
  );
};
```

## API

Coming soon...
