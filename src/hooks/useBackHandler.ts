import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { BackHandler, Platform } from "react-native";
import { useAppStackNavigation } from "./useAppStackNavigation";

export const useBackHandler = (canGoBack: boolean, fromNavigation: boolean) => {
  const navigation = useAppStackNavigation();

  useFocusEffect(
    useCallback(() => {
      const onBackPressHandler = () => {
        return !canGoBack;
      };

      const hardwareBackPressSub = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPressHandler,
      );

      if (
        fromNavigation &&
        navigation &&
        navigation?.setOptions &&
        typeof navigation?.setOptions === "function"
      ) {
        try {
          const enableGesture = canGoBack;
          navigation?.setOptions({
            gestureEnabled: Platform.OS === "ios" ? enableGesture : false,
          });
        } catch {}
      }

      return () => {
        hardwareBackPressSub?.remove();
      };
    }, [canGoBack, fromNavigation, navigation]),
  );
};
