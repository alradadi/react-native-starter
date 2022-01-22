import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import { I18nManager } from 'react-native';

export const setLanguage = async (language: string) => {
  try {
    const isRTL = i18next.dir(language) === 'rtl';
    I18nManager.forceRTL(isRTL);
    await AsyncStorage.setItem('language', language);
  } catch (error) {
    console.error(error);
  }
};
