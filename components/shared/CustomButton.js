import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import StyledText from "./StyledText";
import editIcon from "../../assets/images/button/edit-icon.svg";
import deleteIcon from "../../assets/images/button/delete-icon.svg";

import theme from "../../styles/theme";
import {
  textChildrenProps,
  defaultTextChildrenProps,
  containerPropsStyle,
  borderProps,
  defaultBorderProps,
} from "./proptypes";

const Button = styled.TouchableOpacity`
  width: ${({ width }) => {
    if (typeof width === "string") return width;
    return `${width}px`;
  }};
  height: ${({ height }) => {
    if (typeof height === "string") return height;
    return `${height}px`;
  }};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme: { colors }, disabled, backgroundColor }) =>
    backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  padding-horizontal: 10px;
`;

const CustomButton = (props) => {
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
    borderColor,
    backgroundColor,
    children,
    disabled,
    onPress,
    containerStyle,
  } = props;

  return (
    <Button
      {...props}
      height={height}
      width={width}
      disabled={disabled}
      onPress={onPress}
      borderRadius={borderRadius}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      style={[adapt && { alignSelf: "flex-start" }, { ...containerStyle }]}
    >
      {icon && <SvgXml xml={icon} style={{ marginRight: 5 }} />}
      {text ? (
        <StyledText
          fontSize={textFontSize}
          fontFamily={textFontFamily}
          color={textColor}
          uppercase={uppercase}
          capitalize={capitalize}
          style={textStyle}
        >
          {text}
        </StyledText>
      ) : (
        children
      )}
    </Button>
  );
};

CustomButton.propTypes = {
  contentContainerStyle: PropTypes.shape(containerPropsStyle),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ...textChildrenProps,
  textStyle: PropTypes.shape(textChildrenProps),
  icon: PropTypes.string,
  text: PropTypes.string,
  ...borderProps,
  backgroundColor: PropTypes.string,
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
};

CustomButton.defaultProps = {
  containerStyle: null,
  height: 35,
  width: "auto",
  textStyle: null,
  ...defaultBorderProps,
  ...defaultTextChildrenProps,
  borderRadius: 0,
  borderColor: theme.colors.primaryColor,
  backgroundColor: theme.colors.secondaryColor,
  adapt: false,
  icon: null,
  text: null,
  children: null,
  disabled: false,
  uppercase: false,
  capitalize: false,
};

const StyledEditOrDeleteButton = styled.TouchableOpacity`
  flex-direction: row;
  /* width: ${(props) => (props.width ? props.width : "100%")}; */
  height: ${(props) => (props.height ? props.height : 33)}px;
  justify-content: center;
  align-items: center;
  /* background-color: ${(props) =>
    props.type === "edit"
      ? props.theme.colors.borderColor
      : props.theme.colors.cancelColor};
  border-radius: 20px;
  padding-horizontal: 5px; */
`;

export const EditOrDeleteButton = (props) => {
  return (
    <StyledEditOrDeleteButton {...props}>
      <StyledText
        color={
          props.type === "edit"
            ? theme.colors.secondaryColor
            : theme.colors.cancelColor
        }
        fontSize={16}
        fontFamily="roboto-bold"
        capitalize
        style={{ textDecorationLine: "underline" }}
      >
        {props.text}
      </StyledText>
    </StyledEditOrDeleteButton>
  );
};
export default CustomButton;
