import React from 'react';
import {ColorValue, StyleSheet, View, ViewStyle} from 'react-native';

type Props = {
  lineWidth?: number;
  color?: ColorValue;
  style?: ViewStyle;
};

export const Divider = ({lineWidth = 0.5, color = '#CDCDCC', style}: Props) => {
  return (
    <View style={[styles.rootContainer, {borderWidth: lineWidth, borderColor: color}, style]} />
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
  },
});
