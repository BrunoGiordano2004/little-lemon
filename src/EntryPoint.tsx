import "react-native-gesture-handler";

import {
    Karla_400Regular,
    Karla_500Medium,
    Karla_700Bold,
    Karla_800ExtraBold,
    useFonts,
} from "@expo-google-fonts/karla";
import {
    MarkaziText_400Regular,
    MarkaziText_500Medium,
} from "@expo-google-fonts/markazi-text";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import App from "@app/App";
import { AppThemeProvider } from "@app/components/providers";

SplashScreen.preventAutoHideAsync();

export default function EntryPoint() {
  const [fontsLoaded, fontError] = useFonts({
    MarkaziText_400Regular,
    MarkaziText_500Medium,
    Karla_400Regular,
    Karla_500Medium,
    Karla_700Bold,
    Karla_800ExtraBold,
  });

  const onReady = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    onReady();
  }, [onReady]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AppThemeProvider>
          <StatusBar style="auto" />
          <App />
        </AppThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
