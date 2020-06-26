const frame1 = { opacity: 1 };
const frame2 = { opacity: 0 };

export default {
  keyframes: [
    { ...frame1, offset: 0 },
    { ...frame2, offset: 0.25 },
    { ...frame1, offset: 0.5 },
    { ...frame2, offset: 0.75 },
    { ...frame1, offset: 1 },
  ],
  timing: { duration: 1000 },
};
