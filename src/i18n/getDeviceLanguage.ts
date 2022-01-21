import { NativeModules, Platform } from 'react-native';

export const getDeviceLanguage = (): string => {
  const settings = NativeModules.SettingsManager.settings;

  let lang;

  if (Platform.OS === 'ios') {
    lang = settings.AppleLocale || settings.AppleLanguages[0]; //iOS 13
  } else {
    lang = NativeModules.I18nManager.localeIdentifier;
  }

  return lang.split('_')[0];
};
