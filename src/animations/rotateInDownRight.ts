const transformOrigin = "right bottom";

export default {
  keyframes: [
    { transform: "rotate3d(0, 0, 1, 45deg)", opacity: 0, transformOrigin },
    { transform: "translate3d(0, 0, 0)", opacity: 1, transformOrigin },
  ],
  animationOptions: { duration: 1000, fill: "both" },
};
