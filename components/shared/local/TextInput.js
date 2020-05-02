import React, { useContext } from "react";
import { Input } from "react-native-elements";
import styled from "styled-components/native";
import { translate, capitalizeFirstLetter } from "../../../translator";
import { LanguageContext } from "../../../contexts/LanguageContext";

const StyledInput = styled(Input)``;

const TextInput = ({
  containerStyle,
  multiline,
  keyboardType,
  editable,
  disabled,
  disabledInputStyle,
  inputContainerStyle,
  errorMessage,
  errorStyle,
  errorProps,
  inputComponent,
  inputStyle,
  label,
  labelStyle,
  labelProps,
  leftIcon,
  leftIconContainerStyle,
  rightIcon,
  rightIconContainerStyle,
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  onFocus,
  onBlur
}) => {
  const { language } = useContext(LanguageContext);

  return (
    <StyledInput
      containerStyle={containerStyle}
      multiline={multiline}
      keyboardType={keyboardType}
      editable={editable}
      disabled={disabled}
      disabledInputStyle={disabledInputStyle}
      inputContainerStyle={inputContainerStyle}
      errorMessage={errorMessage}
      errorStyle={errorStyle}
      errorProps={errorProps}
      inputComponent={inputComponent}
      inputStyle={inputStyle}
      label={translate(label, language)}
      labelStyle={labelStyle}
      labelProps={labelProps}
      leftIcon={leftIcon}
      leftIconContainerStyle={leftIconContainerStyle}
      rightIcon={rightIcon}
      rightIconContainerStyle={rightIconContainerStyle}
      placeholder={capitalizeFirstLetter(translate(placeholder, language))}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChangeText}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default TextInput;
