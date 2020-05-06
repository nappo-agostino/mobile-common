import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components/native";
import theme from "../../styles/theme";
import { containerPropsStyle, textProps, defaultTextProps } from "./proptypes";

const Text = styled.Text`
  font-family: ${({ fontFamily }) => fontFamily || "space-mono"};
  font-size: ${({ fontSize }) => fontSize || 14}px;
  color: ${({ color }) => color || theme.colors.defaultColor};
  /* ${({ uppercase, capitalize }) => {
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
    return css`
      text-transform: capitalize;
    `;
  }} */
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
      style={[
        { ...style, includeFontPadding: false },
        capitalize && { textTransform: "capitalize" },
        uppercase && { textTransform: "uppercase" },
      ]}
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
