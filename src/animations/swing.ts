const transformOrigin = "top center";

export default {
  keyframes: [
    { transform: "rotate3d(0, 0, 1, 0deg)", transformOrigin, offset: 0 },
    { transform: "rotate3d(0, 0, 1, 15deg)", transformOrigin, offset: 0.2 },
    { transform: "rotate3d(0, 0, 1, -10deg)", transformOrigin, offset: 0.4 },
    { transform: "rotate3d(0, 0, 1, 5deg)", transformOrigin, offset: 0.6 },
    { transform: "rotate3d(0, 0, 1, -5deg)", transformOrigin, offset: 0.8 },
    { transform: "rotate3d(0, 0, 1, 0deg)", transformOrigin, offset: 1 },
  ],
  timing: { duration: 1000, fill: "both" },
};
