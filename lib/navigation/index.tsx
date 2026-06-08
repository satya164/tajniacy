import {
  createStaticNavigation,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GameScreen, HomeScreen } from './screens';
import { useTheme } from '@hooks/useTheme';
import { useMemo } from 'react';
import { Theme } from '@theme/index';
import { Theme as ReactNavigationTheme } from '@react-navigation/native';

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: HomeScreen,
    Game: GameScreen,
  },
});

type RootStackType = typeof RootStack;

declare module '@react-navigation/core' {
  interface RootNavigator extends RootStackType {}
}

const Navigation = createStaticNavigation(RootStack);

export function NavigationRoot() {
  const theme = useTheme();

  const reactNavigationTheme = useMemo(() => {
    return createReactNavigationThemeFromTheme(theme);
  }, [theme]);

  return <Navigation theme={reactNavigationTheme} />;
}

function createReactNavigationThemeFromTheme(theme: Theme): ReactNavigationTheme {
  const colors = {
    primary: theme.colors.primary,
    background: theme.colors.background,
    card: theme.colors.cardBackground,
    text: theme.colors.text,
    border: theme.colors.cardBorder,
  }

  const reactNavigationTheme = theme.kind === 'light' ? DefaultTheme : DarkTheme;

  return {
    ...reactNavigationTheme,
    dark: theme.kind === 'dark',
    colors: {
      ...reactNavigationTheme.colors,
      ...colors,
    }
  }
}
