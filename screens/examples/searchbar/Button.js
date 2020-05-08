import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Button as CustomButton, StyledText } from "../../../components";
import { APP_TYPES } from "../../../app.types";
import theme from "../../../styles/theme";

const Button = ({
  height,
  width,
  icon,
  text,
  adapt,
  textColor,
  textStyle,
  textFontFamily,
  textFontSize,
  uppercase,
  capitalize,
  borderRadius,
  borderWidth,
  borderColor,
  primaryColor,
  secondaryColor,
  inverted,
  children,
  disabled,
  onPress,
  containerStyle,
  appType,
}) => {
  return appType ? (
    <CustomButton
      height={height}
      width={width}
      disabled={disabled}
      onPress={onPress}
      borderRadius={theme[APP_TYPES[appType]].buttonProps.borderRadius}
      borderColor={theme[APP_TYPES[appType]].buttonProps.primaryColor}
      primaryColor={
        inverted
          ? theme[APP_TYPES[appType]].buttonProps.secondaryColor
          : theme[APP_TYPES[appType]].buttonProps.primaryColor
      }
      secondaryColor={
        inverted
          ? theme[APP_TYPES[appType]].buttonProps.primaryColor
          : theme[APP_TYPES[appType]].buttonProps.secondaryColor
      }
      textColor={textColor}
      borderWidth={borderWidth}
      adapt={adapt}
      textStyle={{
        textTransform: theme[APP_TYPES[appType]].buttonProps.textTransform,
        ...textStyle,
      }}
      textFontFamily={theme[APP_TYPES[appType]].buttonProps.fontFamily}
      textFontSize={theme[APP_TYPES[appType]].buttonProps.fontSize}
      uppercase={uppercase}
      capitalize={capitalize}
      icon={icon}
      text={text}
      containerStyle={containerStyle}
    >
      {children}
    </CustomButton>
  ) : (
    <CustomButton
      height={height}
      width={width}
      disabled={disabled}
      onPress={onPress}
      borderRadius={borderRadius}
      borderColor={borderColor || primaryColor}
      primaryColor={inverted ? secondaryColor : primaryColor}
      secondaryColor={inverted ? primaryColor : secondaryColor}
      borderWidth={borderWidth}
      adapt={adapt}
      textColor={textColor}
      textStyle={textStyle}
      textFontFamily={textFontFamily}
      textFontSize={textFontSize}
      uppercase={uppercase}
      capitalize={capitalize}
      icon={icon}
      text={text}
      containerStyle={containerStyle}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
