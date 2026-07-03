import type { TextStyle } from "react-native";

export const FONT_FAMILY = {
  markaziRegular: "MarkaziText_400Regular",
  markaziMedium: "MarkaziText_500Medium",
  karlaRegular: "Karla_400Regular",
  karlaMedium: "Karla_500Medium",
  karlaBold: "Karla_700Bold",
  karlaExtraBold: "Karla_800ExtraBold",
} as const;

export const TYPOGRAPHY = {
  /**********************
   * Markazi (headings) *
   **********************/
  displayTitle: {
    fontFamily: FONT_FAMILY.markaziMedium,
    fontSize: 64,
    lineHeight: 64,
  },
  subtitle: {
    fontFamily: FONT_FAMILY.markaziRegular,
    fontSize: 40,
    lineHeight: 44,
  },

  /********************
   * Karla (UI + body) *
   ********************/
  leadText: {
    fontFamily: FONT_FAMILY.karlaMedium,
    fontSize: 18,
    lineHeight: 24,
  },
  sectionTitle: {
    fontFamily: FONT_FAMILY.karlaExtraBold,
    fontSize: 20,
    lineHeight: 24,
    textTransform: "uppercase",
  },
  sectionCategories: {
    fontFamily: FONT_FAMILY.karlaExtraBold,
    fontSize: 16,
    lineHeight: 20,
  },
  cardTitle: {
    fontFamily: FONT_FAMILY.karlaBold,
    fontSize: 18,
    lineHeight: 24,
  },
  paragraph: {
    fontFamily: FONT_FAMILY.karlaRegular,
    fontSize: 16,
    lineHeight: 24,
  },
  highlight: {
    fontFamily: FONT_FAMILY.karlaMedium,
    fontSize: 16,
    lineHeight: 20,
  },
} as const satisfies Record<string, TextStyle>;

export type AppTypographyKey = keyof typeof TYPOGRAPHY;
export type AppTypography = typeof TYPOGRAPHY;
