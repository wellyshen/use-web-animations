const frame1 = { transform: "translate3d(0, 0, 0)" };
const frame2 = { transform: "translate3d(-10px, 0, 0)" };
const frame3 = { transform: "translate3d(10px, 0, 0)" };

export default {
  keyframes: [
    { ...frame1, offset: 0 },
    { ...frame2, offset: 0.1 },
    { ...frame3, offset: 0.2 },
    { ...frame2, offset: 0.3 },
    { ...frame3, offset: 0.4 },
    { ...frame2, offset: 0.5 },
    { ...frame3, offset: 0.6 },
    { ...frame2, offset: 0.7 },
    { ...frame3, offset: 0.8 },
    { ...frame2, offset: 0.9 },
    { ...frame1, offset: 1 },
  ],
  timing: { duration: 1000 },
};
