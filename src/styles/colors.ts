export const COLORS = {
  /**********
   * Primary *
   **********/
  green: "#495E57",
  yellow: "#F4CE14",

  /************
   * Secondary *
   ************/
  peach: "#EE9972",
  lightPeach: "#FBDABB",
  lightGray: "#EDEFEE",
  black: "#333333",

  /**********
   * Neutral *
   **********/
  white: "#FFFFFF",
  transparent: "transparent",
} as const;

export type AppColorKey = keyof typeof COLORS;
export type AppColors = typeof COLORS;
