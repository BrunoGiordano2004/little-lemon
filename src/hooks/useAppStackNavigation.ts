import {ParamListBase, useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const useAppStackNavigation = <T extends ParamListBase, R extends keyof T>() => {
  const navigation = useNavigation<NativeStackNavigationProp<T, R>>();
  return navigation;
};
