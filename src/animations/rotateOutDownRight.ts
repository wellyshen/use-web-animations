const transformOrigin = "right bottom";

export default {
  keyframes: [
    { transform: "none", opacity: 1, transformOrigin },
    { transform: "rotate3d(0, 0, 1, -45deg)", opacity: 0, transformOrigin },
  ],
  timing: { duration: 1000, fill: "both" },
};
