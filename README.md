> 🚧 This package is in-progress, **don't use it now**. Because API may be changed frequently, if you're willing to be the early user, please note any change via [release](https://github.com/wellyshen/use-web-animations/releases). Here's the [milestone](#milestone).

# useWebAnimations

Using [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) in the React [hook](https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook) way. Let's create highly-performant, flexible and manipulable animations for modern web app!

## Milestone

- [x] Basic animation with key-frames and timing.
- [x] Playback controller.
- [x] Animation event callbacks.
- [x] Paused at start feature.
- [ ] Server-side compatibility.
- [ ] Unit testing.
- [ ] TypeScript type definition.
- [ ] Demo app.
- [ ] Demo code.
- [ ] Documentation.

## Browser Support

The features of [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) still being [implemented by modern browsers](https://caniuse.com/#feat=web-animation), therefore [polyfill](https://github.com/web-animations/web-animations-js) is built-in for you. The polyfill falls back to the native implementation when a feature is available.

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="32px" height="32px" /><br/>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="32px" height="32px" /><br/>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="32px" height="32px" /><br/>IE / Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="32px" height="32px" /><br/>Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="32px" height="32px" /><br/>iOS Safari |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                            56+                                                                            |                                                                              27+                                                                              |                                                                         IE10+, Edge                                                                         |                                                                            9+                                                                             |                                                                                   7.1+                                                                                    |

<!-- ## Requirement

To use `use-web-animations`, you must use `react@16.8.0` or greater which includes hooks.

## Installation

This package is distributed via [npm](https://www.npmjs.com/package/@welly/use-web-animations).

```sh
$ yarn add @welly/use-web-animations
# or
$ npm install --save @welly/use-web-animations
``` -->
