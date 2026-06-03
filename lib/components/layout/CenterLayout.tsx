import { globalStyles } from "@styles/index";
import { View, ViewProps } from "react-native";

export function CenterLayout(props: ViewProps) {
  return (
    <View {...props} style={[props.style, globalStyles.flexContainer, globalStyles.flexCenter]} />
  );
}
