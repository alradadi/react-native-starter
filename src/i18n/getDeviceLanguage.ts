import { NativeModules, Platform } from 'react-native';

export const getDeviceLanguage = (): string => {
  const { settings } = NativeModules.SettingsManager;

  const lang =
    Platform.OS === 'ios'
      ? settings.AppleLocale || settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier;

  return lang.split('_')[0];
};
