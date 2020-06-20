import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import html from "@rollup/plugin-html";
import livereload from "rollup-plugin-livereload";
import postcss from "rollup-plugin-postcss";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import serve from "rollup-plugin-serve";
import tailwind from "tailwindcss";
import discardComments from "postcss-discard-comments";
import url from "@rollup/plugin-url";

import pkg from "../package.json";
import template from "./template";

const { BUILD } = process.env;
const isDev = BUILD === "dev";
const isDemo = BUILD === "demo";
const isDist = BUILD === "dist";

const cjs = {
  file: isDist ? pkg.main : "demo/.dev/bundle.js",
  format: "cjs",
  sourcemap: isDev,
  exports: "named",
};

const esm = {
  file: pkg.module,
  format: "esm",
  exports: "named",
};

const extensions = [".js", ".ts", ".tsx", ".json"];
const plugins = [
  resolve({ extensions }),
  commonjs(),
  babel({ exclude: "node_modules/**", extensions }),
  replace({
    "process.env.NODE_ENV": JSON.stringify(
      isDev ? "development" : "production"
    ),
  }),
  !isDist && url(),
  !isDist &&
    postcss({
      extract: true,
      sourceMap: isDev,
      minimize: !isDev,
      plugins: [tailwind, discardComments({ removeAll: true })],
    }),
  !isDist && html({ template }),
  !isDist &&
    copy({
      targets: [
        { src: "demo/static/site_assets", dest: "demo/.dev", rename: "assets" },
      ],
    }),
  isDev && serve("demo/.dev"),
  isDev && livereload(),
  !isDev && sizeSnapshot(),
  // Disable "module" to avoid the missing semicolon bug of .esm
  !isDev && terser({ module: false }),
  isDemo &&
    copy({
      targets: [{ src: "demo/.dev", dest: ".", rename: "public" }],
      hook: "writeBundle",
    }),
  isDist &&
    copy({
      targets: [
        {
          src: "src/use-web-animations.d.ts",
          dest: pkg.types.split("/")[0],
          rename: "index.d.ts",
        },
      ],
    }),
];

export default {
  input: isDist ? "src" : "demo",
  output: isDist ? [cjs, esm] : [cjs],
  plugins,
  external: isDist ? Object.keys(pkg.peerDependencies) : [],
};
