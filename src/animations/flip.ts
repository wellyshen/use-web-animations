export default {
  keyframes: [
    {
      transform:
        "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",
      backfaceVisibility: "visible",
      easing: "ease-out",
      offset: 0,
    },
    {
      transform:
        "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)",
      easing: "ease-out",
      offset: 0.4,
    },
    {
      transform:
        "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)",
      easing: "ease-in",
      offset: 0.5,
    },
    {
      transform:
        "perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
      easing: "ease-in",
      offset: 0.8,
    },
    {
      transform:
        "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
      backfaceVisibility: "visible",
      easing: "ease-in",
      offset: 1,
    },
  ],
  animationOptions: { duration: 1000, fill: "both" },
};
