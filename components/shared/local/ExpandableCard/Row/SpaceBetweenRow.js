import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import StyledText from "../../../StyledText";
import { TranslateTextComponent } from "../../../../../translator";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 5px;
  align-items: flex-start;
`;

const SpaceBetweenRow = ({
  title,
  value,
  leftIcon,
  containerStyle,
  titleStyle,
  valueStyle,
  rightComponent
}) => {
  return (
    <Container style={containerStyle}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {leftIcon && (
          <View
            style={{
              width: 16,
              height: 16,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 5
            }}
          >
            <SvgXml height={10} xml={leftIcon} fill="#55595c" />
          </View>
        )}
        <TranslateTextComponent
          capitalize
          vars={{ colon: ":" }}
          style={titleStyle}
        >
          {title}
        </TranslateTextComponent>
      </View>
      {value && (
        <StyledText fontFamily="roboto-light" style={valueStyle}>
          {value}
        </StyledText>
      )}
      {rightComponent}
    </Container>
  );
};

export default SpaceBetweenRow;
