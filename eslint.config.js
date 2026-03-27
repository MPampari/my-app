import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default [
  js.configs.recommended,

  // ✅ THIS is the important part (parser + plugin wired correctly)
  ...tseslint.configs.recommended,

  {
    ignores: ["node_modules", "dist", ".turbo"],
  },

  // ✅ Tell ESLint where tsconfig is
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // ✅ API (Node)
  {
    files: ["apps/api/**/*.ts"],
    languageOptions: {
      globals: globals.node,
    },
  },

  // ✅ Mobile (Expo)
  {
    files: ["apps/mobile/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser, // ✅ IMPORTANT
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        __DEV__: "readonly",
      },
    },
  },

  // ✅ UI (React)
  {
    files: ["packages/ui/**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
    },
  },
];
