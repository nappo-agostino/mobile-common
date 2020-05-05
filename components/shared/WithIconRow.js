import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import StyledText from "./StyledText";
import { containerPropsStyle, style, textProps, nodeProps } from "./proptypes";
import theme from "../../styles/theme";

const Container = styled.View`
  flex-direction: row;
  padding-vertical: 5px;
  align-items: flex-start;
`;

const WithIconRow = (props) => {
  const {
    label,
    value,
    containerStyle,
    icon,
    iconStyle,
    iconColor,
    labelStyle,
    valueStyle,
    rightComponent,
    colon,
    spaceBetween,
  } = props;
  return (
    <Container
      style={[
        spaceBetween && { justifyContent: "space-between" },
        { ...containerStyle },
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {icon && (
          <View
            style={{
              ...iconStyle,
            }}
          >
            <SvgXml height={10} xml={icon} fill={iconColor} style={iconStyle} />
          </View>
        )}
        <StyledText capitalize style={{ paddingRight: 5, ...labelStyle }}>
          {label}
          {colon && ":"}
        </StyledText>
      </View>
      {value && (
        <StyledText style={{ flexWrap: "wrap", flex: 1, ...valueStyle }}>
          {value}
        </StyledText>
      )}
      {rightComponent}
    </Container>
  );
};

WithIconRow.propTypes = {
  containerStyle: PropTypes.shape(containerPropsStyle),
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconStyle: PropTypes.shape(style),
  label: PropTypes.string,
  labelStyle: PropTypes.shape(textProps),
  value: PropTypes.string,
  valueStyle: PropTypes.shape(textProps),
  rightComponent: PropTypes.oneOfType(nodeProps),
  colon: PropTypes.bool,
  spaceBetween: PropTypes.bool,
};

WithIconRow.defaultProps = {
  containerStyle: null,
  icon: null,
  iconColor: theme.colors.grey,
  iconStyle: {
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  label: "label",
  labelStyle: null,
  value: "value",
  valueStyle: null,
  rightComponent: null,
  colon: false,
  spaceBetween: false,
};

export default WithIconRow;
