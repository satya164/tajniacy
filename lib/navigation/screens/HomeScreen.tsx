import { NavigationButton } from "@components/NavigationButton";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "@styles/index";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedView, ThemedText } from "@components/general";
import { CenterLayout } from "@components/layout";

export function HomeScreen() {
  const navigation = useNavigation('Home');
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ThemedView style={[globalStyles.flexContainer, { paddingTop: safeAreaInsets.top }]}>
      <CenterLayout>
        <NavigationButton onPress={() => {
          navigation.navigate('Game');
        }}>
          <ThemedText>Start game</ThemedText>
        </NavigationButton>
      </CenterLayout>
    </ThemedView>
  );
}
