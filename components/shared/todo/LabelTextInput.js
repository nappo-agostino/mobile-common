import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Platform } from "react-native";

import StyledText from "../StyledText";
import theme from "../../../styles/theme";

const Wrapper = styled.View`
  flex-direction: column;
  margin-top: 8px;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : props.theme.colors.borderColor};
  align-items: center;
  font-family: roboto-light;
  padding-horizontal: 5px;
  width: 100%;
  margin-top: 3px;
  border-radius: 4px;
  padding-vertical: ${Platform.OS === "ios" ? 10 : 5}px;
  height: 40px;
`;

const LabelTextInput = ({
  error,
  defaultValue,
  labelFontSize,
  labelFontFamily,
  labelColor,
  borderColor,
  textInputStyle,
  required,
  multiline,
  label,
  info,
  labelTextStyle,
  placeholder,
  secureTextEntry,
  autoCorrect,
  autoCapitalize,
  returnKeyType,
  autoFocus,
  onSubmitEditing,
  autoCompleteType,
  placeholderTextColor,
  value,
  onChangeText,
  inputRef,
  onContentSizeChange,
  onFocus,
  onBlur,
  containerStyle,
  onLayout,
  disabled,
}) => {
  // text input on XIAOMI crash if write email
  const [editable, setEditable] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setEditable(true);
    }, 100);
  }, []);

  return (
    <Wrapper style={{ ...containerStyle }}>
      {label && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <StyledText
            style={labelTextStyle}
            fontSize={labelFontSize}
            fontFamily={labelFontFamily}
            color={labelColor}
            capitalize
          >
            {label}
          </StyledText>
          {info && (
            <StyledText
              style={labelTextStyle}
              fontSize={12}
              fontFamily="roboto-regular"
              color={labelColor}
              capitalize
            >
              {info}
            </StyledText>
          )}
          {required && (
            <StyledText
              color={theme.colors.red}
              style={{ marginLeft: 2, top: -3 }}
            >
              *
            </StyledText>
          )}
        </View>
      )}
      <Input
        defaultValue={defaultValue}
        editable={editable && disabled}
        style={[
          multiline && { maxHeight: 160, paddingTop: 5 },
          { ...textInputStyle },
          error && { borderColor: theme.colors.red },
        ]}
        borderColor={borderColor}
        autoFocus={autoFocus}
        ref={inputRef}
        multiline={multiline}
        placeholder={placeholder}
        autoCompleteType={autoCompleteType}
        secureTextEntry={secureTextEntry}
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
        onLayout={onLayout}
      />
    </Wrapper>
  );
};

export default LabelTextInput;
