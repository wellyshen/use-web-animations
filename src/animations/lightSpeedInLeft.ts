export default {
  keyframes: [
    {
      transform: "translate3d(-100%, 0, 0) skewX(30deg)",
      opacity: 0,
      offset: 0,
    },
    {
      transform: "skewX(-20deg)",
      opacity: 1,
      offset: 0.6,
    },
    {
      transform: "skewX(5deg)",
      offset: 0.8,
    },
    {
      transform: "translate3d(0, 0, 0)",
      opacity: 1,
      offset: 1,
    },
  ],
  timing: { duration: 1000, fill: "both", easing: "ease-out" },
};
