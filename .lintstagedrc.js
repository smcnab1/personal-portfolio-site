module.exports = {
  "*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}": "biome check --write --no-errors-on-unmatched",
  "*.{json,jsonc}": "biome format --write --no-errors-on-unmatched",
};
