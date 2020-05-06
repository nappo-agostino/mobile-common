import React from "react";
import PropTypes from "prop-types";
import CustomTextInput from "./components/TextInput";
import {
  textInputProps,
  defaultTextInputProps,
  defaultBorderProps,
} from "../proptypes";
import theme from "../../../styles/theme";
import { APP_TYPES } from "../../../app.types";

const TextInput = (props) => {
  const {
    labelTextStyle,
    labelFontSize,
    labelFontFamily,
    labelColor,
    label,
    info,
    required,
    requiredColor,

    contentContainerStyle,
    style,
    borderWidth,
    borderColor,
    borderRadius,
    withShadow,
    height,
    backgroundColor,
    textColor,
    inactiveTintColor,
    fontSize,
    fontFamily,
    textStyle,
    error,
    errorColor,
    multiline,
    placeholder,
    secureTextEntry,
    autoCorrect,
    autoCapitalize,
    returnKeyType,
    leftIcon,
    placeholderTextColor,
    value,
    onChangeText,
    inputRef,
    onSubmitEditing,
    onContentSizeChange,
    onFocus,
    onBlur,
    appType,
  } = props;

  return appType ? (
    <CustomTextInput
      borderColor={theme[APP_TYPES[appType]].borderColor}
      borderWidth={theme[APP_TYPES[appType]].borderWidth}
      borderRadius={theme[APP_TYPES[appType]].borderRadius}
      withShadow={theme[APP_TYPES[appType]].textInputProps.withShadow}
      labelTextStyle={labelTextStyle}
      labelFontSize={theme[APP_TYPES[appType]].textInputProps.labelFontSize}
      labelFontFamily={theme[APP_TYPES[appType]].textInputProps.labelFontFamily}
      labelColor={theme[APP_TYPES[appType]].textInputProps.labelColor}
      fontSize={theme[APP_TYPES[appType]].textInputProps.fontSize}
      fontFamily={theme[APP_TYPES[appType]].textInputProps.fontFamily}
      textColor={theme[APP_TYPES[appType]].textInputProps.textColor}
      errorColor={theme[APP_TYPES[appType]].errorColor}
      inactiveTintColor={
        theme[APP_TYPES[appType]].textInputProps.inactiveTintColor
      }
      height={height}
      backgroundColor={backgroundColor}
      requiredColor={theme[APP_TYPES[appType]].textInputProps.requiredColor}
      contentContainerStyle={contentContainerStyle}
      style={style}
      label={label}
      info={info}
      required={required}
      textStyle={textStyle}
      placeholder={placeholder}
      leftIcon={leftIcon}
      placeholderTextColor={placeholderTextColor}
      error={error}
      multiline={multiline}
      value={value}
      secureTextEntry={secureTextEntry}
      autoCorrect={autoCorrect}
      autoCapitalize={autoCapitalize}
      returnKeyType={returnKeyType}
      onChangeText={onChangeText}
      inputRef={inputRef}
      onSubmitEditing={onSubmitEditing}
      onContentSizeChange={onContentSizeChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  ) : (
    <CustomTextInput
      labelTextStyle={labelTextStyle}
      labelFontSize={labelFontSize}
      labelFontFamily={labelFontFamily}
      labelColor={labelColor}
      label={label}
      info={info}
      required={required}
      requiredColor={requiredColor}
      contentContainerStyle={contentContainerStyle}
      style={style}
      borderWidth={borderWidth}
      borderColor={borderColor}
      borderRadius={borderRadius}
      withShadow={withShadow}
      height={height}
      backgroundColor={backgroundColor}
      textColor={textColor}
      inactiveTintColor={inactiveTintColor}
      fontSize={fontSize}
      fontFamily={fontFamily}
      textStyle={textStyle}
      errorColor={errorColor}
      placeholder={placeholder}
      leftIcon={leftIcon}
      placeholderTextColor={placeholderTextColor}
      error={error}
      multiline={multiline}
      value={value}
      secureTextEntry={secureTextEntry}
      autoCorrect={autoCorrect}
      autoCapitalize={autoCapitalize}
      returnKeyType={returnKeyType}
      onChangeText={onChangeText}
      inputRef={inputRef}
      onSubmitEditing={onSubmitEditing}
      onContentSizeChange={onContentSizeChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

TextInput.propTypes = {
  ...textInputProps,
  appType: PropTypes.string,
};

TextInput.defaultProps = {
  ...defaultTextInputProps,
  ...defaultBorderProps,
  placeholder: "",
  appType: null,
};

export default TextInput;
