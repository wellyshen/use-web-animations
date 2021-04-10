export default {
  keyframes: [
    { transform: "scale(1)", opacity: 1, offset: 0 },
    { transform: "translateY(0px) scale(0.7)", opacity: 0.7, offset: 0.2 },
    { transform: "translateX(-2000px) scale(0.7)", opacity: 0.7, offset: 1 },
  ],
  animationOptions: { duration: 1000, fill: "both" },
};
