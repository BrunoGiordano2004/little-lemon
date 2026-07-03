import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ROUTES } from "@app-navigation/constants/routes";
import type { RootStackParamList } from "@app-navigation/types";
import { useAppTheme } from "@app/hooks";

type Nav = NativeStackNavigationProp<
  RootStackParamList,
  typeof ROUTES.ONBOARDING_SCREEN
>;

export const OnboardingScreen = () => {
  const navigation = useNavigation<Nav>();
  const { colors, typography, spacing } = useAppTheme();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={[typography.displayTitle, { color: colors.green }]}>
          Little Lemon
        </Text>
        <Text style={[typography.subtitle, { color: colors.green }]}>
          Welcome
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace(ROUTES.HOME_SCREEN)}
        >
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: { fontSize: 32, fontWeight: "700", color: "#495E57" },
  subtitle: { fontSize: 18, color: "#495E57", marginTop: 8, marginBottom: 32 },
  button: {
    backgroundColor: "#F4CE14",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: { fontSize: 16, fontWeight: "600", color: "#333" },
});
