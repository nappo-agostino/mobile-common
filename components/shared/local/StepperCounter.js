import React from "react";
import styled, { css } from "styled-components/native";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import StyledText from "../StyledText";
import { TranslateTextComponent } from "../../../translator";
import theme from "../../../styles/theme";

const Container = styled.View``;

const TitleContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

const Stepper = styled.TouchableOpacity`
  border-radius: 50px;
  background-color: ${({ backgroundColor, disabled }) => {
    if (disabled) return theme.colors.greyIcon;
    return backgroundColor || theme.colors.secondaryColor;
  }};
  height: ${(props) => (props.size ? props.size : 28)}px;
  width: ${(props) => (props.size ? props.size : 28)}px;
  align-items: center;
  justify-content: center;
`;

const StepperCounter = ({
  title,
  titleIcon,
  titleIconSize = 20,
  value = 0,
  buttonsColor,
  valueStyle,
  onDecreaseCounter,
  onIncreaseCounter,
  buttonStyle,
  size,
  disabled,
  error,
}) => {
  return (
    <Container>
      {(title || titleIcon) && (
        <TitleContainer>
          {titleIcon && (
            <SvgXml
              width={titleIconSize}
              height={titleIconSize}
              xml={titleIcon}
              style={{ marginRight: 5 }}
            />
          )}
          {title && (
            <TranslateTextComponent fontFamily="roboto-medium" capitalize>
              {title}
            </TranslateTextComponent>
          )}
        </TitleContainer>
      )}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Stepper
          disabled={disabled}
          backgroundColor={buttonsColor}
          onPress={onDecreaseCounter}
          style={{ ...buttonStyle }}
          size={size}
        >
          <StyledText
            color="white"
            fontSize={size}
            // style={Platform.OS === "ios" ? { bottom: 5 } : { paddingBottom: 3 }}
          >
            -
          </StyledText>
        </Stepper>
        <View
          style={{
            paddingHorizontal: 5,
            width: 35,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledText
            fontSize={size - 10}
            style={valueStyle}
            color={error && theme.colors.red}
          >
            {value}
          </StyledText>
        </View>
        <Stepper
          disabled={disabled}
          backgroundColor={buttonsColor}
          onPress={onIncreaseCounter}
          style={{ ...buttonStyle }}
          size={size}
        >
          <StyledText
            color="white"
            fontSize={size}
            // style={Platform.OS === "ios" ? { bottom: 5 } : { paddingBottom: 3 }}
          >
            +
          </StyledText>
        </Stepper>
      </View>
    </Container>
  );
};

export default StepperCounter;
