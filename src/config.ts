// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Prediodico ies martinez montañes";
export const SITE_DESCRIPTION =
  "Welcome to my blog! I write about modern web development.";
export const TWITTER_HANDLE = "@iesmartinezm";
export const MY_NAME = "Periodico ies martinez montañes";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
