import React, {PropsWithChildren} from 'react';
import {StyleSheet, TouchableOpacity, TouchableOpacityProps} from 'react-native';

type TouchableRowProps = TouchableOpacityProps & {useNativeAnimations?: boolean};

export const TouchableRow = React.forwardRef(
  (
    {style, children, ...props}: PropsWithChildren<TouchableRowProps>,
    ref: React.Ref<TouchableOpacity> | null,
  ) => {
    return (
      <TouchableOpacity ref={ref} style={[styles.rootContainer, style]} {...props}>
        {children}
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
  },
});
