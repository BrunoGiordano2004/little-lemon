import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ROUTES } from "@app-navigation/constants/routes";
import type { RootStackParamList } from "@app-navigation/types";

type Nav = NativeStackNavigationProp<
  RootStackParamList,
  typeof ROUTES.HOME_SCREEN
>;

export const HomeScreen = () => {
  const navigation = useNavigation<Nav>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Home</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(ROUTES.MENU_SCREEN)}
        >
          <Text style={styles.buttonText}>Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(ROUTES.PROFILE_SCREEN)}
        >
          <Text style={styles.buttonText}>Profile</Text>
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
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#495E57",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#F4CE14",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 200,
    alignItems: "center",
  },
  buttonText: { fontSize: 16, fontWeight: "600", color: "#333" },
});
