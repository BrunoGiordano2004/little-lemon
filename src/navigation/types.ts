import { ROUTES, mainRoutes, onboardingRoutes } from './constants/routes';

type ParamRouteItem<T = string> = { readonly [key: string]: T };

type CreateStackParamList<
  Routes extends ParamRouteItem,
  ExclusiveRoutes extends ParamRouteItem<unknown>,
  DefaultType = undefined,
> = {
  [K in keyof Routes as Routes[K]]: K extends keyof ExclusiveRoutes
    ? ExclusiveRoutes[K]
    : Routes[K] extends keyof Routes
      ? DefaultType
      : Routes[K] extends keyof ExclusiveRoutes
        ? ExclusiveRoutes[Routes[K]]
        : DefaultType;
};

export type OnboardingStackParamList = CreateStackParamList<
  typeof onboardingRoutes,
  {
    [ROUTES.ONBOARDING_SCREEN]: undefined;
  }
>;

export type MainStackParamList = CreateStackParamList<
  typeof mainRoutes,
  {
    [ROUTES.HOME_SCREEN]: undefined;
    [ROUTES.MENU_SCREEN]: { category?: string } | undefined;
    [ROUTES.PROFILE_SCREEN]: undefined;
  }
>;

export type RootStackParamList = OnboardingStackParamList & MainStackParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
