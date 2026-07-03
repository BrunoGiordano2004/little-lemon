import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import App from "@app/App";

export default function EntryPoint() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <App />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
