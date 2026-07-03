import { useRoute, type RouteProp } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ROUTES } from "@app-navigation/constants/routes";
import type { RootStackParamList } from "@app-navigation/types";

type MenuRoute = RouteProp<RootStackParamList, typeof ROUTES.MENU_SCREEN>;

export const MenuScreen = () => {
  const route = useRoute<MenuRoute>();
  const category = route.params?.category;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Menu</Text>
        {category ? (
          <Text style={styles.subtitle}>Category: {category}</Text>
        ) : null}
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
  title: { fontSize: 28, fontWeight: "700", color: "#495E57" },
  subtitle: { fontSize: 16, color: "#495E57", marginTop: 8 },
});
