import React, {PropsWithChildren} from 'react';

import {StyleSheet, TouchableOpacity, TouchableOpacityProps} from 'react-native';

type TouchableColumnProps = TouchableOpacityProps & {
  useNativeAnimations?: boolean;
};

export const TouchableColumn = React.forwardRef(
  (
    {style, children, ...props}: PropsWithChildren<TouchableColumnProps>,
    ref: React.Ref<TouchableOpacity> | null,
  ) => {
    return (
      <TouchableOpacity
        ref={ref}
        style={[style, styles.rootContainer]}
        activeOpacity={0.8}
        {...props}>
        {children}
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'column',
  },
});
