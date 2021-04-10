export default {
  keyframes: [
    {
      transform: "translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)",
      opacity: 0,
    },
    { transform: "translate3d(0, 0, 0)", opacity: 1 },
  ],
  animationOptions: { duration: 1000, fill: "both" },
};
