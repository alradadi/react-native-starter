import { LanguageDetectorAsyncModule } from 'i18next';

import { getPreferredLanguage } from './getPreferredLanguage';
import { setLanguage } from './setLanguage';

export const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => undefined,
  detect: async callback => {
    const language = await getPreferredLanguage();
    callback(language);
  },
  cacheUserLanguage: setLanguage,
};
