import React from "react";
import styled from "styled-components/native";
import theme from "../../../styles/theme";
import { TranslateTextComponent } from "../../../translator";

const Button = styled.TouchableOpacity`
  background-color: ${({ color }) =>
    color === "green" ? theme.colors.green : "white"};
  border-color: ${({ color }) =>
    color === "green" ? theme.colors.green : theme.colors.red};
  border-width: 1px;
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const ModalButton = ({
  children,
  color,
  height = 40,
  width = 140,
  onPress,
  disabled
}) => {
  return (
    <Button
      color={color}
      height={height}
      width={width}
      onPress={onPress}
      disabled={disabled}
    >
      <TranslateTextComponent
        capitalize
        style={{
          fontSize: 16,
          fontFamily: "roboto-bold",
          textTransform: "uppercase",
          color: color === "green" ? "white" : theme.colors.red
        }}
      >
        {children}
      </TranslateTextComponent>
    </Button>
  );
};

export default ModalButton;
