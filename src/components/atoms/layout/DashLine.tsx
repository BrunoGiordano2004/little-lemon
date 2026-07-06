import React from 'react';
import {View} from 'react-native';

type Props = {
  color?: string;
  size?: number;
  mode?: 'horizontal' | 'vertical';
};

export const DashLine = ({color = '#9A9A9A', size = 1, mode = 'horizontal'}: Props) => {
  const isHorizontal = mode === 'horizontal';

  return (
    <View
      style={{
        width: isHorizontal ? '100%' : size,
        height: isHorizontal ? size : '100%',
        borderRadius: 1,
        borderWidth: size,
        borderColor: color,
        borderStyle: 'dashed',
        zIndex: 0,
      }}>
      <View
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: isHorizontal ? '100%' : size,
          height: isHorizontal ? size : '100%',
          backgroundColor: 'white',
          zIndex: 1,
        }}
      />
    </View>
  );
};
