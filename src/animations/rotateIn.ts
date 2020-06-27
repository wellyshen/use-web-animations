const transformOrigin = "center";

export default {
  keyframes: [
    { transform: "rotate3d(0, 0, 1, -200deg)", opacity: 0, transformOrigin },
    { transform: "translate3d(0, 0, 0)", opacity: 1, transformOrigin },
  ],
  timing: { duration: 1000, fill: "both" },
};
