import { useTheme } from "@hooks/useTheme";
import { Text, View, ViewProps } from "react-native";

export interface ClueCardProps extends ViewProps {
  clue: string;
}

export function ClueCard(props: ClueCardProps) {
  const {
    clue,
    ...viewProps
  } = props;

  const theme = useTheme();

  return (
    <View style={[{ backgroundColor: theme.colors.cardBackground }, viewProps.style]}>
      <Text style={{ color: theme.colors.text }}>{clue}</Text>
    </View>
  );
}
