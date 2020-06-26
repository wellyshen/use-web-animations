const easing = "cubic-bezier(0.215, 0.61, 0.355, 1)";

export default {
  keyframes: [
    {
      transform: "translate3d(-3000px, 0, 0) scaleX(3)",
      opacity: 0,
      easing,
      offset: 0,
    },
    {
      transform: "translate3d(25px, 0, 0) scaleX(1)",
      opacity: 1,
      easing,
      offset: 0.6,
    },
    {
      transform: "translate3d(-10px, 0, 0) scaleX(0.98)",
      easing,
      offset: 0.75,
    },
    { transform: "translate3d(5px, 0, 0) scaleX(0.995)", easing, offset: 0.9 },
    {
      transform: "translate3d(0, 0, 0)",
      opacity: 1,
      easing,
      offset: 1,
    },
  ],
  timing: { duration: 1000, fill: "both" },
};
