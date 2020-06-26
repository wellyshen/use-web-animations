const frame = { transform: "translate3d(0, -20px, 0) scaleY(0.9)", opacity: 1 };

export default {
  keyframes: [
    {
      transform: "translate3d(0, 0, 0) scaleY(1)",
      opacity: 1,
      offset: 0,
    },
    { transform: "translate3d(0, 10px, 0) scaleY(0.985)", offset: 0.2 },
    { ...frame, offset: 0.4 },
    { ...frame, offset: 0.45 },
    { transform: "translate3d(0, 2000px, 0) scaleY(3)", opacity: 0, offset: 1 },
  ],
  timing: { duration: 1000, fill: "both" },
};
