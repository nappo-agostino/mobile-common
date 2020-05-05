import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import StyledText from "./StyledText";
import theme from "../../styles/theme";
import { textProps, containerPropsStyle, textChildrenProps } from "./proptypes";

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

const StyledRadioButton = styled.View`
  height: 15px;
  width: 15px;
  border-width: ${({ isSelected, isDisabled }) =>
    isSelected || isDisabled ? 5 : 1}px;
  border-color: ${({ borderColor }) => borderColor};

  border-radius: 50px;
  margin-right: 5px;
`;

const RadioButton = (props) => {
  const {
    contained,
    disabled,
    error,
    errorLabel,
    onPress,
    label,
    isSelected,
    children,
    textStyle,
    fontFamily,
    fontSize,
    color,
    errorColor,
    disabledColor,
    containerStyle,
  } = props;

  const getColor = () => {
    if (disabled) return disabledColor;
    if (error) return errorColor;
    return color;
  };

  return (
    <Container
      style={[
        contained && {
          borderWidth: 1,
          borderColor: getColor(),
          padding: 5,
          borderRadius: 4,
          alignSelf: "flex-start",
        },
        {
          ...containerStyle,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <StyledRadioButton
        isSelected={isSelected}
        isDisabled={disabled}
        borderColor={getColor()}
      />
      {label && (
        <StyledText
          style={textStyle}
          fontFamily={fontFamily}
          fontSize={fontSize}
          color={getColor()}
        >
          {label}
        </StyledText>
      )}
      {children}
    </Container>
  );
};

RadioButton.propTypes = {
  containerStyle: PropTypes.shape(containerPropsStyle),
  isSelected: PropTypes.bool,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  error: PropTypes.bool,
  errorLabel: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    StyledText,
  ]),
  textStyle: PropTypes.shape(textProps),
  ...textChildrenProps,
  color: PropTypes.string,
  errorColor: PropTypes.string,
  disabledColor: PropTypes.string,
  contained: PropTypes.bool,
};

RadioButton.defaultProps = {
  containerStyle: null,
  isSelected: false,
  disabled: false,
  error: false,
  errorLabel: null,
  children: null,
  textStyle: null,
  color: theme.colors.primaryColor,
  errorColor: theme.colors.errorColor,
  disabledColor: theme.colors.grey,
  contained: false,
};

export default RadioButton;
