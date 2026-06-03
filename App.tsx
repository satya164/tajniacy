import { ColorSchemeName, StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { NavigationRoot } from '@navigation/index';
import { ThemeContext } from '@contexts/ThemeContext';
import { useMemo } from 'react';
import { Theme } from '@theme/index';
import { DarkColors, LightColors } from '@theme/palette';

function App() {
  const isDarkMode = useColorScheme();
  const colorScheme = useColorScheme();
  const theme = useThemeByColorSchemeName(colorScheme);

  return (
    <ThemeContext value={theme}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationRoot />
      </SafeAreaProvider>
    </ThemeContext>
  );
}

function useThemeByColorSchemeName(colorScheme: ColorSchemeName): Theme {
  const themeValue = useMemo<Theme>(() => {
    if (colorScheme === 'dark') {
      return {
        kind: 'dark',
        colors: DarkColors,
      }
    } else {
      return {
        kind: 'light',
        colors: LightColors,
      }
    }
  }, [colorScheme]);
  return themeValue;
}

export default App;
