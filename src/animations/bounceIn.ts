const easing = "cubic-bezier(0.215, 0.61, 0.355, 1)";

export default {
  keyframes: [
    { transform: "scale3d(0.3, 0.3, 0.3)", opacity: 0, easing, offset: 0 },
    { transform: "scale3d(1.1, 1.1, 1.1)", easing, offset: 0.2 },
    { transform: "scale3d(0.9, 0.9, 0.9)", easing, offset: 0.4 },
    { transform: "scale3d(1.03, 1.03, 1.03)", opacity: 1, easing, offset: 0.6 },
    { transform: "scale3d(0.97, 0.97, 0.97)", easing, offset: 0.8 },
    { transform: "scale3d(1, 1, 1)", opacity: 1, easing, offset: 1 },
  ],
  timing: { duration: 750, fill: "both" },
};
