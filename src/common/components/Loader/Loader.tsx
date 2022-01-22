import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { createThemedComponent } from 'react-native-theming';

const Loader = () => (
  <View style={styles.root}>
    <ActivityIndicator size="large" style={styles.root} />
  </View>
);

export default createThemedComponent(Loader);

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
