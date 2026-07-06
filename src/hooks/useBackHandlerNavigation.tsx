import {useFocusEffect} from '@react-navigation/core';
import {useCallback} from 'react';
import {BackHandler, Platform} from 'react-native';
import {useAppStackNavigation} from './useAppStackNavigation';

export const useBackHandlerNavigation = (enabled = true) => {
  const navigation = useAppStackNavigation();
  const handleBackButton = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
    return true;
  };

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android' && enabled) {
        const subscription = BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        return () => {
          subscription.remove();
        };
      }
    }, [enabled]),
  );
};
