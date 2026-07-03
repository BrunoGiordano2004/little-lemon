import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ROUTES } from "@app-navigation/constants/routes";
import type { RootStackParamList } from "@app-navigation/types";
import { HomeScreen } from "@app-screens/home";
import { MenuScreen } from "@app-screens/menu";
import { OnboardingScreen } from "@app-screens/onboarding";
import { ProfileScreen } from "@app-screens/profile";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.ONBOARDING_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={ROUTES.ONBOARDING_SCREEN}
        component={OnboardingScreen}
      />
      <Stack.Screen name={ROUTES.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={ROUTES.MENU_SCREEN} component={MenuScreen} />
      <Stack.Screen name={ROUTES.PROFILE_SCREEN} component={ProfileScreen} />
    </Stack.Navigator>
  );
};
