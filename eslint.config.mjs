// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { globalIgnores } from "eslint/config";
import { fixupPluginRules } from "@eslint/compat";

import * as graphqlEslint from "@graphql-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  globalIgnores(["./app/gql/*"]),
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...storybook.configs["flat/recommended"],

  {
    files: ["**/*.gqls"],
    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",
      parser: { ...graphqlEslint, meta: { name: "@graphql-eslint" } },
      parserOptions: { schema: "./path/to/schema/**/*.gqls" },
    },
    plugins: { "@graphql-eslint": fixupPluginRules(graphqlEslint) },

    rules: {
      ...graphqlEslint.flatConfigs["schema-recommended"].rules,
      // other rule overrides here
    },
  },
];

export default eslintConfig;
