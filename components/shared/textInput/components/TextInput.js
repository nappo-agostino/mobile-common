import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Platform } from "react-native";
import { SvgXml } from "react-native-svg";

import Error from "./Error";
import SecureText from "./SecureText";
import {
  defaultBorderProps,
  textInputProps,
  defaultTextInputProps,
} from "../../proptypes";
import Label from "./Label";

const Container = styled.View`
  height: ${({ height }) => height}px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  border-width: ${({ borderWidth }) => borderWidth}px;
  border-color: ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding-horizontal: 10px;
`;

const UserInput = styled.TextInput`
  flex: 1;
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}px;
  align-items: center;
  color: ${({ textColor }) => textColor};
`;

const ImageContainer = styled.View`
  width: 30px;
`;

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
  } = props;

  // text input on XIAOMI crash if write email
  const [editable, setEditable] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setEditable(true);
    }, 100);
  }, []);

  const [showPass, setShowPass] = useState(true);

  const handleShowPassword = () => {
    setShowPass((prevState) => !prevState);
  };
  return (
    <View style={contentContainerStyle}>
      {label && (
        <Label
          labelTextStyle={labelTextStyle}
          labelFontSize={labelFontSize}
          labelFontFamily={labelFontFamily}
          labelColor={labelColor}
          label={label}
          info={info}
          required={required}
          requiredColor={requiredColor}
        />
      )}
      <Container
        borderRadius={borderRadius}
        height={height}
        backgroundColor={backgroundColor}
        borderWidth={borderWidth}
        borderColor={borderColor}
        style={[
          withShadow &&
            Platform.select({
              ios: {
                shadowColor: "rgba(0,0,0, .4)", // IOS
                shadowOffset: { height: 1, width: 1 }, // IOS
                shadowOpacity: 1, // IOS
                shadowRadius: 1, // IOS
              },
              android: {
                elevation: 2, // Android,
              },
            }),
          { ...style },
        ]}
      >
        {leftIcon && (
          <ImageContainer>
            <SvgXml xml={leftIcon} width={22} height={22} fill={textColor} />
          </ImageContainer>
        )}
        <UserInput
          textColor={textColor}
          fontFamily={fontFamily}
          fontSize={fontSize}
          style={textStyle}
          error={error}
          editable={editable}
          ref={inputRef}
          multiline={multiline}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && showPass}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          returnKeyType={returnKeyType}
          placeholderTextColor={placeholderTextColor}
          underlineColorAndroid="transparent"
          onChangeText={onChangeText}
          value={value}
          onSubmitEditing={onSubmitEditing}
          onContentSizeChange={onContentSizeChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {secureTextEntry && (
          <SecureText
            onPress={handleShowPassword}
            color={showPass ? textColor : inactiveTintColor}
          />
        )}
      </Container>
      <Error error={error} errorColor={errorColor} fontFamily={fontFamily} />
    </View>
  );
};

TextInput.propTypes = {
  ...textInputProps,
};

TextInput.defaultProps = {
  ...defaultTextInputProps,
  ...defaultBorderProps,
  placeholder: "",
};

export default TextInput;
