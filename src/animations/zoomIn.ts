const frame = { transform: "none", opacity: 1 };

export default {
  keyframes: [
    { transform: "scale3d(0.3, 0.3, 0.3)", opacity: 0, offset: 0 },
    { ...frame, offset: 0.5 },
    { ...frame, offset: 1 },
  ],
  animationOptions: { duration: 1000, fill: "both" },
};
