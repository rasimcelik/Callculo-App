export const THEMES = {
  dark: "dark",
  light: "light",
};
export const theme = {
  [THEMES.dark]: {
    "--main-bg": "hsl(222, 26%, 31%)",
    "--toggle-bg": "hsl(223, 31%, 20%)",
    "--screen-bg": "hsl(224, 36%, 15%)",
    "--primary-1": "hsl(6, 63%, 50%)",
    "--button-bg": "hsl(30, 25%, 89%)",
    "--reset-bg": "hsl(225, 21%, 49%)",
    "--text-2": "hsl(221, 14%, 31%)",
    "--shadow": "hsl(28, 16%, 65%)",
    "--text-1": "#ffffff",
    "--shadow-submit": "hsl(6, 70%, 34%)",
    "--shadow-reset": "hsl(224, 28%, 35%)",
    "--color-submit": "#ffffff",
  },
  [THEMES.light]: {
    "--main-bg": "hsl(0, 0%, 90%)",
    "--toggle-bg": "hsl(0, 5%, 81%)",
    "--screen-bg": "hsl(0, 0%, 100%)",
    "--primary-1": "hsl(25, 98%, 40%)",
    "--button-bg": "hsl(45, 7%, 89%)",
    "--reset-bg": "hsl(185, 42%, 37%)",
    "--text-2": "hsl(221, 14%, 31%)",
    "--text-1": "hsl(60, 10%, 19%)",
    "--shadow": "hsl(35, 11%, 61%)",
    "--shadow-submit": "hsl(25, 99%, 27%)",
    "--shadow-reset": "hsl(185, 58%, 25%)",
    "--color-submit": "#ffffff",
  },
};
