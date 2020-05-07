import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components/native";
import theme from "../../styles/theme";
import { containerPropsStyle, textProps, defaultTextProps } from "./proptypes";

const Text = styled.Text`
  font-family: ${({ fontFamily }) => fontFamily || "roboto-regular"};
  font-size: ${({ fontSize }) => fontSize || 14}px;
  color: ${({ color }) => color || theme.colors.defaultColor};
  ${({ uppercase, capitalize }) => {
    if (uppercase) {
      return css`
        text-transform: uppercase;
      `;
    }
    if (capitalize) {
      return css`
        text-transform: capitalize;
      `;
    }
  }}
`;

const StyledText = (props) => {
  const {
    fontFamily,
    fontSize,
    color,
    capitalize,
    uppercase,
    style,
    children,
  } = props;

  return (
    <Text
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      capitalize={capitalize}
      uppercase={uppercase}
      style={{ ...style, includeFontPadding: false }}
      {...props}
    >
      {children}
    </Text>
  );
};

// StyledText.propTypes = {
//   style: PropTypes.shape({ ...containerPropsStyle, textProps }),
//   ...textProps,
//   capitalize: PropTypes.bool,
//   uppercase: PropTypes.bool,
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//     StyledText,
//   ]).isRequired,
// };

// StyledText.defaultProps = {
//   style: null,
//   ...defaultTextProps,
//   capitalize: true,
//   uppercase: false,
// };

export default StyledText;
