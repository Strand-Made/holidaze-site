import { breakpoints, fontSizes } from "../globalStyle/_variables";

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}px){${style}}`;
};

export const fontSize = (key: keyof typeof fontSizes) => {
  return `${fontSizes[key]}`;
};
