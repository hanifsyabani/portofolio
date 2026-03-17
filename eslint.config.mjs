import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  {
    rules: {
      // Disable the rule that disallows using `console` statements.
      "no-console": "off",
      // unused variables are common in Next.js projects, especially when using TypeScript.
      "@typescript-eslint/no-unused-vars": "error",
    }
  }
]);

export default eslintConfig;
