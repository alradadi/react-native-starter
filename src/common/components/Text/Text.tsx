import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text as RNText, TextProps } from 'react-native';

import { TextSize } from '@/src/theme/const';

interface Props extends TextProps {
  bold?: boolean;
  children?: React.ReactNode;
  size?: number;
  light?: boolean;
  color?: string;
  center?: boolean;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
}

const Text = ({
  bold,
  size,
  light,
  color,
  center,
  mt,
  mr,
  mb,
  ml,
  style,
  ...restProps
}: Props) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const allStyles = [
    styles.default,
    isRtl ? styles.rtl : styles.ltr,
    bold && styles.bold,
    light && styles.light,
    center && styles.center,
    style,
    !!color && { color },
    !!size && { fontSize: size },
    !!mt && { marginTop: mt },
    !!mr && { marginRight: mr },
    !!mb && { marginBottom: mb },
    !!ml && { marginLeft: ml },
  ];

  return <RNText style={allStyles} {...restProps} />;
};

export default memo(Text);

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  center: {
    textAlign: 'center',
  },
  default: {
    fontSize: TextSize.Body,
    fontWeight: '500',
  },
  light: {
    fontWeight: '300',
  },
  ltr: {
    writingDirection: 'ltr',
  },
  rtl: {
    writingDirection: 'rtl',
  },
});
