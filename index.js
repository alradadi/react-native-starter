import { AppRegistry } from 'react-native';

import { initI18n } from '@/src/i18n/initI18n';

import App from './App';

initI18n();

AppRegistry.registerComponent('react_native_starter', () => App);
