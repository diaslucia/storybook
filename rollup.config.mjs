import { babel } from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import scss from "rollup-plugin-scss";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import sass from "rollup-plugin-sass";

import { createRequire } from "node:module";
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      /* resolve({
        extensions: [".js", ".jsx"],
      }), */
      resolve(),
      commonjs(),
      terser(),
      scss(),
      sass(),
      typescript(),
      /*  babel({
        extensions: [".js", ".jsx", "ts", "tsx"],
        exclude: "node_modules/**",
      }), */
    ],
    external: ["react", "react-dom", "@emotion/react", "@emotion/styled"],
  },
  {
    input: "dist/esm/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.scss$/],
  },
];
