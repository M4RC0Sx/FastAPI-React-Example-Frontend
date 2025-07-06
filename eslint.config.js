import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";

import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: ["dist"],
  },

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginHooks,
      "react-refresh": pluginReactRefresh,
    },
    rules: {
      // Existing plugins
      ...pluginReact.configs.recommended.rules,
      ...pluginHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "warn",
    },
  },

  eslintConfigPrettier
);