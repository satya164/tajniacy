import { globalStyles } from "@styles/index";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedView } from "@components/general";
import { CenterLayout } from "@components/layout";
import { View } from "react-native";
import { ClueCard } from "@components/card";

export function GameScreen() {
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
