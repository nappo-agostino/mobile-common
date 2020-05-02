import React from "react";
import styled from "styled-components/native";

const Text = styled.Text`
  font-family: ${({ fontFamily }) => fontFamily || "space-mono"};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  color: ${({ color }) => color || "black"};
`;

const StyledText = (props) => {
  return (
    <Text
      fontFamily={props.fontFamily}
      fontSize={props.fontSize}
      color={props.color}
      style={{ ...props.style, includeFontPadding: false }}
      {...props}
    >
      {props.children}
    </Text>
  );
};

export default StyledText;
