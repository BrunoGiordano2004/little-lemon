import { Linking } from "react-native";

export async function openExternalLink(url: string): Promise<void> {
  const isSupported = await Linking.canOpenURL(url);

  if (isSupported) {
    await Linking.openURL(url);
  }
}
