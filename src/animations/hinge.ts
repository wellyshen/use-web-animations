const transformOrigin = "top left";
const easing = "ease-in-out";
const frame1 = { transform: "rotate3d(0, 0, 1, 80deg)", easing };
const frame2 = { transform: "rotate3d(0, 0, 1, 60deg)", opacity: 1, easing };

export default {
  keyframes: [
    {
      transform: "translate3d(0, 0, 0)",
      opacity: 1,
      transformOrigin,
      easing,
      offset: 0,
    },
    { ...frame1, offset: 0.2 },
    { ...frame2, offset: 0.4 },
    { ...frame1, offset: 0.6 },
    { ...frame2, offset: 0.8 },
    {
      transform: "translate3d(0, 700px, 0)",
      opacity: 0,
      transformOrigin,
      offset: 1,
    },
  ],
  timing: { duration: 2000, fill: "both" },
};
