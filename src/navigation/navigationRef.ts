import {
    CommonActions,
    createNavigationContainerRef,
} from "@react-navigation/native";

import { ROUTES } from "./constants/routes";
import type { RootStackParamList } from "./types";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function goToHomeAndResetHistory() {
  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: ROUTES.HOME_SCREEN }],
    }),
  );
}

export function goToOnboardingAndResetHistory() {
  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: ROUTES.ONBOARDING_SCREEN }],
    }),
  );
}
