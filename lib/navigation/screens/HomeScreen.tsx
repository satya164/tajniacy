import { NavigationButton } from "@components/NavigationButton";
import { globalStyles } from "@styles/index";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackNavigationProp } from "..";
import { ThemedView, ThemedText } from "@components/general";
import { CenterLayout } from "@components/layout";

export interface HomeScreenProps {
  navigation: RootStackNavigationProp,
}

export function HomeScreen(props: HomeScreenProps) {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ThemedView style={[globalStyles.flexContainer, { paddingTop: safeAreaInsets.top }]}>
      <CenterLayout>
        <NavigationButton onPress={() => {
          props.navigation.navigate('Game');
        }}>
          <ThemedText>Start game</ThemedText>
        </NavigationButton>
      </CenterLayout>
    </ThemedView>
  );
}

