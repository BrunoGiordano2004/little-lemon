import { useBackHandler } from "@app/hooks";
import { useBackHandlerNavigation } from "@app/hooks/useBackHandlerNavigation";
import { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleSheet, View, ViewProps } from "react-native";
import { Edge, useSafeAreaInsets } from "react-native-safe-area-context";

type BaseViewProps = {
  edges?: Edge[];
  light?: boolean;
  pointerEvents?: ViewProps["pointerEvents"];
  topInsetBgColor?: ColorValue;
  bottomInsetBgColor?: ColorValue;
  disableBackAction?: boolean;
  onTouchStart?: () => void;
  backgroundColor?: ColorValue;
  canGoBack?: boolean;
  fromNavigation?: boolean;
  canNavigateBack?: boolean;
  onLayout?: (event: { nativeEvent: { layout: { height: number } } }) => void;
};

export function BaseView({
  edges = [],
  light = false,
  children,
  pointerEvents,
  topInsetBgColor = "transparent",
  bottomInsetBgColor = "transparent",
  onTouchStart,
  backgroundColor = "#FFFFFF",
  canGoBack = true,
  fromNavigation = true,
  canNavigateBack = false,
  onLayout,
}: PropsWithChildren<BaseViewProps>) {
  const { top, bottom } = useSafeAreaInsets();

  useBackHandler(canGoBack, fromNavigation);
  useBackHandlerNavigation(canNavigateBack);

  const showTopInset = useMemo(() => edges.includes("top"), [edges]);
  const showBottomInset = useMemo(() => edges.includes("bottom"), [edges]);

  const effectiveBottomInset = Math.min(bottom, 48);

  return (
    <View
      style={[styles.rootContainer, { backgroundColor: backgroundColor }]}
      pointerEvents={pointerEvents}
      onTouchStart={onTouchStart}
      onLayout={onLayout}
    >
      {showTopInset && (
        <View
          style={{
            height: top,
            backgroundColor: topInsetBgColor,
          }}
        />
      )}

      {children}
      {showBottomInset && (
        <View
          style={{
            height: effectiveBottomInset,
            backgroundColor: bottomInsetBgColor,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
