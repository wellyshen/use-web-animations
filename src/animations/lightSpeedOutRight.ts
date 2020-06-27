export default {
  keyframes: [
    { transform: "translate3d(0, 0, 0)", opacity: 1 },
    { transform: "translate3d(100%, 0, 0) skewX(30deg)", opacity: 0 },
  ],
  timing: { duration: 1000, fill: "both", easing: "ease-in" },
};
