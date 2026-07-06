import React, {PropsWithChildren} from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';

type RowProps = PropsWithChildren<ViewProps> & {reverse?: boolean};

export const Row = React.forwardRef(
  ({style, children, reverse = false, ...props}: RowProps, ref: React.LegacyRef<View> | null) => {
    const flexDirection: ViewStyle['flexDirection'] = reverse ? 'row-reverse' : 'row';

    return (
      <View ref={ref} style={[style, {flexDirection}]} {...props}>
        {children}
      </View>
    );
  },
);
