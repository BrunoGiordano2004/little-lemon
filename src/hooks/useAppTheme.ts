import { useContext } from "react";

import { AppThemeContext } from "@app/components/providers";

export const useAppTheme = () => {
  const { colors, iconsSize, spacing, spacingColors, typography } =
    useContext(AppThemeContext);
  return { colors, iconsSize, spacing, spacingColors, typography };
};
