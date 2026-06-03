import { globalStyles } from "@styles/index";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackNavigationProp } from "..";
import { ThemedText } from "@components/general/ThemedText";
import { ThemedView } from "@components/general/ThemedView";

export interface GameScreenProps {
  navigation: RootStackNavigationProp,
}

export function GameScreen(props: GameScreenProps) {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ThemedView style={[globalStyles.flexContainer, { paddingTop: safeAreaInsets.top }]}>
      <ThemedText>Hello world</ThemedText>
    </ThemedView>
  );
}
