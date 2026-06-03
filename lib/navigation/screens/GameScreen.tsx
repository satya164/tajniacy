import { globalStyles } from "@styles/index";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackNavigationProp } from "..";
import { ThemedText, ThemedView } from "@components/general";
import { CenterLayout } from "@components/layout";
import { NavigationButton } from "@components/NavigationButton";
import { View } from "react-native";
import { ClueCard } from "@components/card";

export interface GameScreenProps {
  navigation: RootStackNavigationProp,
}

export function GameScreen(props: GameScreenProps) {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ThemedView style={[globalStyles.flexContainer, { paddingTop: safeAreaInsets.top }]}>
      <CenterLayout>
        <GameContents />
      </CenterLayout>
    </ThemedView>
  );
}

function GameContents() {
  const clues = [...Array.from({ length: 25 }).map((_, index) => {
    return `Clue text ${index}`;
  })]



  return (
    <View style={[globalStyles.flexContainer, globalStyles.fillParent, globalStyles.flexCenter, { flexWrap: 'wrap', flexDirection: 'row' }]}>
      {clues.map((clue, index) => {
        return <ClueCard key={index.toString()} clue={clue} style={[globalStyles.flexContainer, { minWidth: 96 }]} />
      })}
    </View>
  );
}
