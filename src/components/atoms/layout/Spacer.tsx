import {getDebugSpacingColor} from '@app/styles/spacing';
import React from 'react';
import {View, ViewStyle} from 'react-native';

type SpacerProps = {
  size: number;
  horizontal?: boolean;
};

export const Spacer = ({size, horizontal = false}: SpacerProps) => {
  const debugColor = getDebugSpacingColor(size);

  const style: ViewStyle = {
    ...(!horizontal ? {height: size} : {width: size}),
    ...(debugColor ? {backgroundColor: debugColor} : {}),
  };

  return <View style={style} />;
};
