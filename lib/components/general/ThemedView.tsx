import React from 'react';
import { View, type ViewProps } from 'react-native';
import { useTheme } from '@hooks/useTheme';

export function ThemedView(props: ViewProps) {
  const theme = useTheme();

  return (
    <View {...props} style={[props.style, { backgroundColor: theme.colors.background }]} />
  );
}

