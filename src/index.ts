// @ts-ignore
import loadPolyfill from "./polyfill";

if (typeof window !== "undefined") loadPolyfill();

export { default } from "./useWebAnimations";
export * from "./animations";
