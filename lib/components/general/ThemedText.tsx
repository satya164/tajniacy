import React from 'react';
import { Colors } from '@theme/palette';
import { StyleSheet, Text, TextProps } from 'react-native';
import { useTheme } from '@hooks/useTheme';

export function ThemedText(props: TextProps) {
  const theme = useTheme();

  return (
    <Text {...props} style={[styles.baseStyle, { color: theme.colors.text }]} />
  );
}

const styles = StyleSheet.create({
  baseStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: Colors.Black,
  }
});
