export const ICONS_SIZE = {
  xxxSm: 4,
  xxSm: 8,
  xSm: 12,
  sm: 16,
  rg: 24,
  md: 32,
  xMd: 40,
  xxMd: 48,
  lg: 64,
  xLg: 96,
  xxLg: 120,
  xxxLg: 180,
} as const;

export type AppIconSize = keyof typeof ICONS_SIZE;
export type AppIconsSizes = typeof ICONS_SIZE;
