import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, type NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GameScreen, HomeScreen } from "./screens";
import { useTheme } from "@hooks/useTheme";
import { useMemo } from "react";
import { Theme } from "@theme/index";
import { Theme as ReactNavigationTheme } from '@react-navigation/native'

export type RootStackParamList = {
  Home: undefined;
  Game: undefined;
}

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function NavigationRoot() {
  const theme = useTheme();

  const reactNavigationTheme = useMemo(() => {
    return createReactNavigationThemeFromTheme(theme)
  }, [theme]);

  return (
    <NavigationContainer theme={reactNavigationTheme}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='Home' component={HomeScreen} />
        <RootStack.Screen name='Game' component={GameScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
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
