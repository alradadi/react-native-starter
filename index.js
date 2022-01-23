import { AppRegistry } from 'react-native';

import { disableFontScaling } from '@/src/app/utils/disableFontScaling';
import { initI18n } from '@/src/i18n/initI18n';
import Theme from '@/src/theme/Theme';

import App from './App';

initI18n();
Theme.init();
disableFontScaling();

AppRegistry.registerComponent('react_native_starter', () => App);
