import { NavigationButton } from "@components/NavigationButton";
import { globalStyles } from "@styles/index";
import React from "react";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackNavigationProp } from "..";
import { ThemedView } from "@components/general/ThemedView";

export interface HomeScreenProps {
  navigation: RootStackNavigationProp,
}

export function HomeScreen(props: HomeScreenProps) {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ThemedView style={[globalStyles.flexContainer, { paddingTop: safeAreaInsets.top }]}>
      <NavigationButton onPress={() => {
        props.navigation.navigate('Game');
      }}>
        <Text>Start game</Text>
      </NavigationButton>
    </ThemedView>
  );
}

