import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ROUTES } from "@app-navigation/constants/routes";
import type { RootStackParamList } from "@app-navigation/types";
import { HomeScreen } from "@app-screens/home";
import { MenuScreen } from "@app-screens/menu";
import { OnboardingScreen } from "@app-screens/onboarding";
import { ProfileScreen } from "@app-screens/profile";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const globalModalPresentation =
  Platform.OS === "ios" ? "formSheet" : "transparentModal";
export const globalModalAnimation =
  Platform.OS === "ios" ? "fade_from_bottom" : "fade_from_bottom";
export const globalModalContentStyle =
  Platform.OS === "android"
    ? { backgroundColor: "transparent" }
    : { backgroundColor: "black" };
export const inModalNavigationAndroidOptions = {
  presentation: "transparentModal",
  animation: "fade_from_bottom",
  contentStyle: { backgroundColor: "transparent" },
};

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.ONBOARDING_SCREEN}
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
      <Stack.Screen
        name={ROUTES.ONBOARDING_SCREEN}
        component={OnboardingScreen}
      />
      <Stack.Screen name={ROUTES.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={ROUTES.MENU_SCREEN} component={MenuScreen} />
      <Stack.Screen
        name={ROUTES.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          presentation: globalModalPresentation,
          animation: globalModalAnimation,
          contentStyle: globalModalContentStyle,
          sheetCornerRadius: 16,
        }}
      />
    </Stack.Navigator>
  );
};
