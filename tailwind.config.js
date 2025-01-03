// @ts-check
import { createPreset, presets } from "fumadocs-ui/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  presets: [
    createPreset({
      addGlobalColors: true,
      preset: {
        ...presets.vitepress,
        // light: {
        //   ...presets.vitepress.light,
        // },
        // dark: {
        //   ...presets.vitepress.dark,
        // },
        // css: {
        //   ...presets.vitepress.css,
        // },
      },
    }),
  ],
  plugins: [require("tailwindcss-animate")],
};
