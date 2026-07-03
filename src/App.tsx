import { NavigationContainer } from "@react-navigation/native";

import { navigationRef } from "@app-navigation/navigationRef";
import { RootStack } from "@app/components/navigation";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
}
