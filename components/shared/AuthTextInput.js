import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Platform } from "react-native";
import { SvgXml } from "react-native-svg";
import theme from "../../styles/theme";
import showPassIcon from "../../assets/images/authTextInput/show-password.svg";
import StyledText from "./StyledText";
import {
  defaultBorderProps,
  textInputProps,
  defaultTextInputProps,
} from "./proptypes";

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

const PasswordButton = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;

  width: 30px;
`;

const AuthTextInput = (props) => {
  const {
    contentContainerStyle,
    style,
    borderWidth,
    borderColor,
    borderRadius,
    withShadow,
    height,
    backgroundColor,
    color,
    inactiveTintColor,
    fontSize,
    fontFamily,
    textStyle,
    error,
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
            <SvgXml xml={leftIcon} width={22} height={22} fill={color} />
          </ImageContainer>
        )}
        <UserInput
          textColor={color}
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
          <PasswordButton activeOpacity={0.7} onPress={handleShowPassword}>
            <SvgXml
              xml={showPassIcon}
              width={25}
              height={25}
              fill={showPass ? color : inactiveTintColor}
            />
          </PasswordButton>
        )}
      </Container>

      <View style={[{ height: 18, marginLeft: 30 }]}>
        {error && (
          <StyledText
            fontFamily={fontFamily}
            color={theme.colors.errorColor}
            fontSize={10}
            capitalize
            style={{ paddingTop: 2 }}
          >
            {error}
          </StyledText>
        )}
      </View>
    </View>
  );
};

AuthTextInput.propTypes = {
  ...textInputProps,
};

AuthTextInput.defaultProps = {
  ...defaultTextInputProps,
  ...defaultBorderProps,
  placeholder: "",
};

export default AuthTextInput;
