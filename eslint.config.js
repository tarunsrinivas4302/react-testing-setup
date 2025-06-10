import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import testingLibrary from "eslint-plugin-testing-library";
import vitest from "eslint-plugin-vitest";

export default [
  // Ignores dist folder
  { ignores: ["dist"] },
  // General app files
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  // Overriding Vitest files
  // {
  //   files: [
  //     "**/__tests__/*.[jt]s?(x)", // Overriding jsx and tsx files in __tests__folder
  //     "**/*.{test,spec}.[jt]s?(x)", // Overriding test and spec files
  //   ],
  //   languageOptions: {
  //     globals: {
  //       ...globals.browser,
  //       ...globals.node,
  //       ...globals.jest, // helpful for test functions like describe, it, expect
  //     },
  //   },
  //   plugins: {
  //     vitest,
  //     "testing-library": testingLibrary,
  //   },
  //   rules: {
  //     // Optional: Turn off or relax rules that cause friction in test files
  //     "no-unused-expressions": "off",
  //     "no-undef": "off",
  //     "testing-library/no-debug": "warn", // Example rule
  //     "vitest/no-disabled-tests": "warn", // Vitest plugin rule
  //   },
  // },
];
