import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.jest, // 🔧 добавили поддержку Jest
      },
    },
    plugins: {
      js,
      "testing-library": require("eslint-plugin-testing-library"),
      "jest-dom": require("eslint-plugin-jest-dom"),
    },
    rules: {
      // сюда можно добавить свои правила позже
    },
    extends: [
      "plugin:testing-library/react",
      "plugin:jest-dom/recommended",
      "eslint:recommended", // базовые правила
    ],
  },
]);
