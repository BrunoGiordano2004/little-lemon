import React, {PropsWithChildren} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

export const Column = React.forwardRef(
  (
    {children, style, ...props}: PropsWithChildren<ViewProps>,
    ref: React.LegacyRef<View> | null,
  ) => {
    return (
      <View ref={ref} style={[styles.rootContainer, style]} {...props}>
        {children}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'column',
  },
});
