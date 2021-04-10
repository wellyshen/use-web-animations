const frame1 = { transform: "scale(1)" };
const frame2 = { transform: "scale(1.3)" };

export default {
  keyframes: [
    { ...frame1, offset: 0 },
    { ...frame2, offset: 0.14 },
    { ...frame1, offset: 0.28 },
    { ...frame2, offset: 0.42 },
    { ...frame1, offset: 0.7 },
    { transform: "none", offset: 1 },
  ],
  animationOptions: { duration: 1300, fill: "both", easing: "ease-in-out" },
};
