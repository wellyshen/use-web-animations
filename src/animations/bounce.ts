const easing1 = "cubic-bezier(0.215, 0.61, 0.355, 1)";
const easing2 = "cubic-bezier(0.755, 0.05, 0.855, 0.06)";
const transformOrigin = "center bottom";
const frame1 = {
  transform: "translate3d(0, 0, 0)",
  easing: easing1,
  transformOrigin,
};
const frame2 = {
  transform: "translate3d(0, -30px, 0) scaleY(1.1)",
  easing: easing2,
  transformOrigin,
};

export default {
  keyframes: [
    { ...frame1, offset: 0 },
    { ...frame1, offset: 0.2 },
    { ...frame2, offset: 0.4 },
    { ...frame2, offset: 0.43 },
    { ...frame1, offset: 0.53 },
    {
      transform: "translate3d(0, -15px, 0) scaleY(1.05)",
      easing: easing2,
      transformOrigin,
      offset: 0.7,
    },
    {
      transform: "translate3d(0, 0, 0) scaleY(0.95)",
      easing: easing1,
      transformOrigin,
      offset: 0.8,
    },
    {
      transform: "translate3d(0, -4px, 0) scaleY(1.02)",
      transformOrigin,
      offset: 0.9,
    },
    { ...frame1, offset: 1 },
  ],
  timing: { duration: 1000, fill: "both" },
};
