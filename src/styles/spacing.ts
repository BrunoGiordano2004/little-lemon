export const SPACING_SM = {
  zero: 0,
  one: 1,
  xxxxSmall: 1,
  xxxSmall: 2,
  xxSmall: 4,
  xSmall: 8,
  small: 16,
  regular: 24,
  xRegular: 32,
  xMedium: 40,
  medium: 48,
  large: 64,
  xLarge: 80,
  xxLarge: 120,
} as const;

export const SPACING_LG = {
  zero: 0,
  one: 1,
  xxxxSmall: 2,
  xxxSmall: 4,
  xxSmall: 8,
  xSmall: 16,
  small: 24,
  regular: 32,
  xRegular: 40,
  xMedium: 48,
  medium: 64,
  large: 80,
  xLarge: 160,
  xxLarge: 240,
} as const;

export const DEBUG_SPACING = false;

export const SPACING_COLORS: Record<keyof typeof SPACING_SM, string> = {
  zero: "#000000",
  one: "#000000",
  xxxxSmall: "#272727",
  xxxSmall: "#ED4B82",
  xxSmall: "#FF8E6B",
  xSmall: "#B5A2DB",
  small: "#7E5DC1",
  regular: "#8FD1F6",
  xRegular: "#33ABA0",
  xMedium: "#E7F5FD",
  medium: "#FFDD55",
  large: "#AFB82E",
  xLarge: "#8B5102",
  xxLarge: "#636B71",
};

function buildValueToColorMap(
  spacingObj: Record<string, number>,
  colorsObj: Record<string, string>,
): Record<number, string> {
  const map: Record<number, string> = {};
  for (const key of Object.keys(spacingObj)) {
    map[spacingObj[key]] = colorsObj[key];
  }
  return map;
}

export const SPACING_VALUE_COLORS_SM = buildValueToColorMap(
  SPACING_SM,
  SPACING_COLORS,
);
export const SPACING_VALUE_COLORS_LG = buildValueToColorMap(
  SPACING_LG,
  SPACING_COLORS,
);

export const getDebugSpacingColor = (value?: number): string | undefined => {
  if (!DEBUG_SPACING || typeof value !== "number") {
    return undefined;
  }
  return SPACING_VALUE_COLORS_LG[value] ?? SPACING_VALUE_COLORS_SM[value];
};

export type AppSpacingColors = Record<number, string>;
export type AppSpacingSize = keyof typeof SPACING_LG;
export type AppSpacing = { readonly [K in keyof typeof SPACING_LG]: number };
