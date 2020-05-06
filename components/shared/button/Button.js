import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import CustomButton from "./components/Button";
import { APP_TYPES } from "../../../app.types";
import {
  containerPropsStyle,
  textChildrenProps,
  defaultTextChildrenProps,
} from "../proptypes";
import theme from "../../../styles/theme";
import StyledText from "../StyledText";

const Button = (props) => {
  const {
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
  } = props;

  return appType ? (
    <CustomButton
      {...props}
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
Button.propTypes = {
  containerStyle: PropTypes.shape({ ...containerPropsStyle }),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textColor: PropTypes.string,
  textFontFamily: PropTypes.string,
  textFontSize: PropTypes.number,
  textStyle: PropTypes.shape(textChildrenProps),
  icon: PropTypes.string,
  text: PropTypes.string,
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  adapt: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    StyledText,
  ]),
  onPress: PropTypes.func.isRequired,
  uppercase: PropTypes.bool,
  capitalize: PropTypes.bool,
  inverted: PropTypes.bool,
  borderColor: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  appType: PropTypes.string,
};

Button.defaultProps = {
  containerStyle: null,
  height: 35,
  width: "auto",
  textStyle: null,
  borderWidth: 1,
  borderRadius: 4,
  textColor: null,
  textFontFamily: "space-mono",
  textFontSize: 14,
  adapt: false,
  icon: null,
  text: null,
  children: null,
  disabled: false,
  uppercase: false,
  capitalize: false,
  inverted: false,
  borderColor: null,
  primaryColor: theme.DEFAULT.buttonProps.primaryColor,
  secondaryColor: theme.DEFAULT.buttonProps.secondaryColor,
  appType: null,
};
