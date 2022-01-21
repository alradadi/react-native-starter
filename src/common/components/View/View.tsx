import React from 'react';
import { useTranslation } from 'react-i18next';
import { View as RNView, ViewProps } from 'react-native';

type Props = ViewProps;

const View = ({ style, ...props }: Props) => {
  const { i18n } = useTranslation();

  const direction = i18n.dir();

  return <RNView style={[style, { direction }]} {...props} />;
};

export default View;
