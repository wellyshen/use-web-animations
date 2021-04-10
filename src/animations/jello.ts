const transformOrigin = "center";
const frame = { transform: "translate3d(0, 0, 0)", transformOrigin };

export default {
  keyframes: [
    { ...frame, offset: 0 },
    { ...frame, offset: 0.111 },
    {
      transform: "skewX(-12.5deg) skewY(-12.5deg)",
      transformOrigin,
      offset: 0.222,
    },
    {
      transform: "skewX(6.25deg) skewY(6.25deg)",
      transformOrigin,
      offset: 0.333,
    },
    {
      transform: "skewX(-3.125deg) skewY(-3.125deg)",
      transformOrigin,
      offset: 0.444,
    },
    {
      transform: "skewX(1.5625deg) skewY(1.5625deg)",
      transformOrigin,
      offset: 0.555,
    },
    {
      transform: "skewX(-0.78125deg) skewY(-0.78125deg)",
      transformOrigin,
      offset: 0.666,
    },
    {
      transform: "skewX(0.390625deg) skewY(0.390625deg)",
      transformOrigin,
      offset: 0.777,
    },
    {
      transform: "skewX(-0.1953125deg) skewY(-0.1953125deg)",
      transformOrigin,
      offset: 0.888,
    },
    { ...frame, offset: 1 },
  ],
  animationOptions: { duration: 1000, fill: "both" },
};
