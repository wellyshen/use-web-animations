const transformOrigin = "center bottom";

export default {
  keyframes: [
    {
      transform: "scale(0.1) rotate(30deg)",
      opacity: 0,
      transformOrigin,
      offset: 0,
    },
    { transform: "rotate(-10deg)", transformOrigin, offset: 0.5 },
    { transform: "rotate(3deg)", transformOrigin, offset: 0.7 },
    { transform: "scale(1)", opacity: 1, transformOrigin, offset: 1 },
  ],
  animationOptions: { duration: 1000, fill: "both" },
};
