import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import theme from "../../../styles/theme";
import StyledText from "../StyledText";
import { textProps, style } from "../proptypes";

const TitleContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

const Stepper = styled.TouchableOpacity`
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ backgroundColor, disabled }) => {
    if (disabled) return theme.colors.disabledColor;
    return backgroundColor;
  }};
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  align-items: center;
  justify-content: center;
`;

const StepperCounter = ({
  title,
  titleIcon,
  titleStyle,
  titleIconSize,
  value,
  buttonsColor,
  valueStyle,
  onDecreaseCounter,
  onIncreaseCounter,
  buttonStyle,
  size,
  disabled,
  error,
  borderRadius,
  minValue,
  maxValue,
}) => {
  return (
    <View>
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
          {title && <StyledText style={titleStyle}>{title}</StyledText>}
        </TitleContainer>
      )}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Stepper
          disabled={disabled || value - 1 < minValue}
          backgroundColor={buttonsColor}
          onPress={onDecreaseCounter}
          borderRadius={borderRadius}
          style={{ ...buttonStyle }}
          size={size}
        >
          <StyledText
            color="white"
            fontSize={size}
            style={{ paddingBottom: 5 }}
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
          disabled={disabled || value + 1 < maxValue}
          backgroundColor={buttonsColor}
          borderRadius={borderRadius}
          onPress={onIncreaseCounter}
          style={{ ...buttonStyle }}
          size={size}
        >
          <StyledText color="white" fontSize={size}>
            +
          </StyledText>
        </Stepper>
      </View>
    </View>
  );
};

StepperCounter.propTypes = {
  title: PropTypes.string,
  titleIcon: PropTypes.string,
  titleStyle: PropTypes.shape(textProps),
  titleIconSize: PropTypes.number,
  value: PropTypes.number.isRequired,
  buttonsColor: PropTypes.string,
  valueStyle: PropTypes.shape(textProps),
  onDecreaseCounter: PropTypes.func.isRequired,
  onIncreaseCounter: PropTypes.func.isRequired,
  buttonStyle: PropTypes.shape(style),
  size: PropTypes.number,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  borderRadius: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
};

StepperCounter.defaultProps = {
  title: null,
  titleIcon: null,
  titleStyle: null,
  titleIconSize: 20,
  buttonsColor: theme.colors.defaultColor,
  valueStyle: null,

  buttonStyle: null,
  size: 28,
  disabled: false,
  error: false,
  borderRadius: 50,
  minValue: 0,
  maxValue: null,
};

export default StepperCounter;
