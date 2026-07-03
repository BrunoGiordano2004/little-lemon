import {
    createContext,
    useEffect,
    useState,
    type PropsWithChildren,
} from "react";
import { useWindowDimensions } from "react-native";

import {
    COLORS,
    ICONS_SIZE,
    SPACING_LG,
    SPACING_SM,
    SPACING_VALUE_COLORS_LG,
    SPACING_VALUE_COLORS_SM,
    TYPOGRAPHY,
    type AppColors,
    type AppIconsSizes,
    type AppSpacing,
    type AppSpacingColors,
    type AppTypography,
} from "@app/styles";

type AppThemeContextValue = {
  colors: AppColors;
  typography: AppTypography;
  spacing: AppSpacing;
  spacingColors: AppSpacingColors;
  iconsSize: AppIconsSizes;
};

export const AppThemeContext = createContext<AppThemeContextValue>({
  colors: COLORS,
  typography: TYPOGRAPHY,
  spacing: SPACING_LG,
  spacingColors: SPACING_VALUE_COLORS_LG,
  iconsSize: ICONS_SIZE,
});

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const { width } = useWindowDimensions();

  const [colors] = useState(COLORS);
  const [typography] = useState(TYPOGRAPHY);
  const [iconsSize] = useState(ICONS_SIZE);
  const [spacing, setSpacing] = useState<AppSpacing>(SPACING_LG);
  const [spacingColors, setSpacingColors] = useState<AppSpacingColors>(
    SPACING_VALUE_COLORS_LG,
  );

  useEffect(() => {
    if (width <= 320) {
      setSpacing(SPACING_SM);
      setSpacingColors(SPACING_VALUE_COLORS_SM);
    } else {
      setSpacing(SPACING_LG);
      setSpacingColors(SPACING_VALUE_COLORS_LG);
    }
  }, [width]);

  return (
    <AppThemeContext.Provider
      value={{ colors, typography, spacing, spacingColors, iconsSize }}
    >
      {children}
    </AppThemeContext.Provider>
  );
};
