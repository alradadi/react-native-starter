import AsyncStorage from '@react-native-async-storage/async-storage';
import { mapValues } from 'lodash';
import { createTheme, ThemeType } from 'react-native-theming';

import { themes as appThemes } from '@/src/theme/themes';

type ThemeNames = keyof typeof appThemes;

class Theme {
  #currentTheme?: ThemeType;

  #themes: Dict<ThemeType> = {};

  init = () => {
    this.#themes = mapValues(appThemes, (theme, name) =>
      createTheme(theme, name),
    );
    this.restore();
  };

  /**
   * gets current theme
   */
  get = () => this.#currentTheme;

  /**
   * sets current theme
   */
  set = (themeName: ThemeNames) => {
    this.#currentTheme = this.#themes[themeName];
    this.#currentTheme.apply();
    AsyncStorage.setItem('theme', themeName).catch(console.error);
  };

  /**
   * restore form storage
   */
  restore = async () => {
    try {
      const themeName = await AsyncStorage.getItem('theme');
      if (themeName) {
        this.#currentTheme = this.#themes[themeName];
        this.#currentTheme.apply();
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export default new Theme();
