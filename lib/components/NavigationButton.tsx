import { Touchable, TouchableProps } from "react-native-gesture-handler";
import React from "react";

export interface NavigationButtonProps extends TouchableProps {
  children: React.ReactNode;
}

export function NavigationButton(props: NavigationButtonProps) {
  const {
    ...touchableProps
  } = props;

  return (
    <Touchable underlayColor={'black'}
      {...touchableProps}
    />
  );
}
