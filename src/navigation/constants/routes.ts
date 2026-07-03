const onboardingRoutes = {
  ONBOARDING_SCREEN: "ONBOARDING_SCREEN",
} as const;

const mainRoutes = {
  HOME_SCREEN: "HOME_SCREEN",
  MENU_SCREEN: "MENU_SCREEN",
  PROFILE_SCREEN: "PROFILE_SCREEN",
} as const;

export const ROUTES = {
  ...onboardingRoutes,
  ...mainRoutes,
} as const;

export { mainRoutes, onboardingRoutes };
