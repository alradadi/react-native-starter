import AsyncStorage from '@react-native-async-storage/async-storage';

import { getDeviceLanguage } from './getDeviceLanguage';

export const getPreferredLanguage = async () => {
  try {
    const storedLanguage = await AsyncStorage.getItem('language');
    if (storedLanguage) {
      return storedLanguage;
    }
    return getDeviceLanguage();
  } catch (error) {
    console.error(error);
    return 'en';
  }
};
