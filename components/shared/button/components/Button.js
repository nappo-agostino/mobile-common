import React from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import StyledText from "../../StyledText";

const StyledButton = styled.TouchableOpacity`
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
  background-color: ${({ secondaryColor }) => secondaryColor};
  border-color: ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  border-width: ${({ borderWidth }) => borderWidth}px;
  padding-horizontal: 10px;
`;

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
  children,
  disabled,
  onPress,
  containerStyle,
}) => {
  return (
    <StyledButton
      height={height}
      width={width}
      disabled={disabled}
      onPress={onPress}
      borderRadius={borderRadius}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      borderWidth={borderWidth}
      borderColor={borderColor}
      style={[adapt && { alignSelf: "flex-start" }, { ...containerStyle }]}
    >
      {icon && <SvgXml xml={icon} style={{ marginRight: 5 }} />}
      {text ? (
        <StyledText
          fontSize={textFontSize}
          fontFamily={textFontFamily}
          color={textColor || primaryColor}
          uppercase={uppercase}
          capitalize={capitalize}
          style={textStyle}
        >
          {text}
        </StyledText>
      ) : (
        children
      )}
    </StyledButton>
  );
};

export default Button;

// Button.propTypes = {
//   contentContainerStyle: PropTypes.shape(containerPropsStyle),
//   height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   ...textChildrenProps,
//   textStyle: PropTypes.shape(textChildrenProps),
//   icon: PropTypes.string,
//   text: PropTypes.string,
//   borderWidth: PropTypes.number,
//   borderRadius: PropTypes.number,
//   adapt: PropTypes.bool,
//   disabled: PropTypes.bool,
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//     StyledText,
//   ]),
//   onPress: PropTypes.func.isRequired,
//   uppercase: PropTypes.bool,
//   capitalize: PropTypes.bool,
//   inverted: PropTypes.bool,
//   primaryColor: PropTypes.string,
// };

// Button.defaultProps = {
//   containerStyle: null,
//   height: 35,
//   width: "auto",
//   textStyle: null,
//   borderWidth: 1,
//   borderRadius: 4,
//   ...defaultTextChildrenProps,
//   adapt: false,
//   icon: null,
//   text: null,
//   children: null,
//   disabled: false,
//   uppercase: false,
//   capitalize: false,
//   inverted: false,
//   primaryColor: theme[APP_TYPES.default].primaryColor,
// };
