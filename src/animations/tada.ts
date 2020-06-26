const frame1 = { transform: "scale3d(1, 1, 1)" };
const frame2 = { transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)" };
const frame3 = { transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" };
const frame4 = { transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)" };

export default {
  keyframes: [
    { ...frame1, offset: 0 },
    { ...frame2, offset: 0.1 },
    { ...frame2, offset: 0.2 },
    { ...frame3, offset: 0.3 },
    { ...frame4, offset: 0.4 },
    { ...frame3, offset: 0.5 },
    { ...frame4, offset: 0.6 },
    { ...frame3, offset: 0.7 },
    { ...frame4, offset: 0.8 },
    { ...frame3, offset: 0.9 },
    { ...frame1, offset: 1 },
  ],
  timing: { duration: 1000, fill: "both" },
};
