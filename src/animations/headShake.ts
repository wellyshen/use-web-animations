const frame = { transform: "translateX(0)" };

export default {
  keyframes: [
    { ...frame, offset: 0 },
    { transform: "translateX(-6px) rotateY(-9deg)", offset: 0.065 },
    { transform: "translateX(5px) rotateY(7deg)", offset: 0.185 },
    { transform: "translateX(-3px) rotateY(-5deg)", offset: 0.315 },
    { transform: "translateX(2px) rotateY(3deg)", offset: 0.435 },
    { ...frame, offset: 0.5 },
    { ...frame, offset: 1 },
  ],
  timing: { duration: 1000, fill: "both", easing: "ease-in-out" },
};
