import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

/**
 * Flat config, replacing .eslintrc.json.
 *
 * Next 16 dropped `next lint`, and ESLint 9 stopped reading .eslintrc files, so
 * `npm run lint` had been failing on both counts — it now calls eslint directly
 * against this file.
 */
const config = [
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
  ...nextCoreWebVitals,
];

export default config;
