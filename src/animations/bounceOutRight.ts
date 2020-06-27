export default {
  keyframes: [
    { transform: "none", opacity: 1, offset: 0 },
    {
      transform: "translate3d(-20px, 0, 0) scaleX(0.9)",
      opacity: 1,
      offset: 0.2,
    },
    {
      transform: "translate3d(2000px, 0, 0) scaleX(2)",
      opacity: 0,
      offset: 1,
    },
  ],
  timing: { duration: 1000, fill: "both" },
};
