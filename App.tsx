/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { changeLanguage } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ScrollView, StatusBar } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { createStyle } from 'react-native-theming';

import { Text, View } from '@/src/common/components';
import Theme from '@/src/theme/Theme';

const Section: React.FC<{
  title: string;
}> = ({ children, title }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{children}</Text>
    </View>
  );
};

export const App = () => {
  const { t, i18n } = useTranslation();

  const backgroundStyle = {
    backgroundColor: '@backgroundColor',
  };

  return (
    <View style={[{ flex: 1 }, backgroundStyle]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <Header />
        <View style={{ flex: 1, backgroundColor: '@backgroundColor' }}>
          <Section title="Step One">{t('welcome')}</Section>
          <Button
            title="change language"
            onPress={() => changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
          />
          <Button title="change to light" onPress={() => Theme.set('light')} />
          <Button title="change to dark" onPress={() => Theme.set('dark')} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = createStyle({
  highlight: {
    fontWeight: '700',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 8,
    color: '@textColor',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '@textColor',
  },
});
