import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import ModalDropdown from "react-native-modal-dropdown";
import { SvgXml } from "react-native-svg";
import { Platform, TouchableOpacity, View } from "react-native";
import theme from "../../../../styles/theme";
import StyledText from "../../StyledText";
import { textProps, style, nodeProps, defaultTextProps } from "../../proptypes";
import OptionRow from "./OptionRow";
import Value from "./Value";
import Arrow from "./Arrow";
import { APP_TYPES } from "../../../../appTypes";

const Wrapper = styled(ModalDropdown).attrs(
  ({
    disabled,
    options,
    containerWidth,
    arrowContainerWidth,
    dropdownStyle,
    color,
  }) => ({
    disabled,
    dropdownStyle: {
      borderColor: color,
      marginTop: Platform.OS === "android" ? -20 : 0,
      width: containerWidth - arrowContainerWidth,
      borderWidth: 1.5,
      height: options.length <= 250 / 50 ? options.length * 50 : 250,
      ...dropdownStyle,
    },
    dropdownTextStyle: {
      fontSize: 12,
      textTransform: "capitalize",
      height: 50,
    },
  })
)`
  border-width: 1px;
  border-color: ${({ color, error }) => {
    if (error) return theme.colors.red;
    if (color) return color;
    return theme.colors.primaryColor;
  }};
  /* flex: 1; */
  border-radius: ${({ borderRadius }) => borderRadius}px;
  overflow: hidden;
  margin-vertical: 5px;
`;

const Container = styled.View`
  padding-left: 5px;
  min-height: 40px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ contained, color }) => (contained ? color : "white")};
`;

const Dropdown = (props) => {
  const {
    contained,

    color,
    placeHolder,
    options,
    defaultValue,
    value,
    onSelect,
    disabled,
    wrapperStyle,
    valueStyle,
    dropdownStyle,
    arrowContainerStyle,
    error,
    leftIcon,
    leftIconColor,
    rightIcon,
    rightIconColor,
    borderRadius,
  } = props;
  const [containerWidth, setContainerWidth] = useState(0);
  const [arrowContainerWidth, setArrowContainerWidth] = useState(0);

  const updateArrowContainerWidth = (width) => {
    setArrowContainerWidth(width);
  };

  return (
    <Wrapper
      error={error}
      disabled={disabled}
      showsVerticalScrollIndicator={false}
      options={options}
      defaultValue={defaultValue}
      containerWidth={containerWidth}
      arrowContainerWidth={arrowContainerWidth}
      dropdownStyle={dropdownStyle}
      borderRadius={borderRadius}
      color={color}
      style={wrapperStyle}
      renderRow={(option) => <OptionRow option={option} />}
      onSelect={onSelect}
    >
      <Container
        color={color}
        contained={contained}
        onLayout={(layout) =>
          setContainerWidth(layout.nativeEvent.layout.width)
        }
      >
        {leftIcon && (
          <SvgXml
            xml={leftIcon}
            fill={leftIconColor || (contained && "white")}
            style={{ marginRight: 5 }}
          />
        )}
        <Value
          value={value}
          valueStyle={valueStyle}
          contained={contained}
          placeHolder={placeHolder}
        />
        <Arrow
          color={color}
          arrowContainerStyle={arrowContainerStyle}
          icon={rightIcon}
          iconColor={rightIconColor}
          // appType={appType}
          updateArrowContainerWidth={updateArrowContainerWidth}
        />
      </Container>
    </Wrapper>
  );
};

Dropdown.propTypes = {
  color: PropTypes.string,
  placeHolder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
      rowColor: PropTypes.string,
      labelContainerStyle: PropTypes.shape(style),
      labelStyle: PropTypes.shape(textProps),
      icon: PropTypes.string,
      iconColor: PropTypes.string,
      iconStyle: PropTypes.shape(style),
    })
  ),
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  wrapperStyle: PropTypes.shape(style),
  valueStyle: PropTypes.shape(textProps),
  dropdownStyle: PropTypes.shape(style),
  arrowContainerStyle: PropTypes.shape(style),
  error: PropTypes.bool,
  rightIcon: PropTypes.string,
  rightIconColor: PropTypes.string,
  leftIcon: PropTypes.string,
  leftIconColor: PropTypes.string,
  contained: PropTypes.bool,
  borderRadius: PropTypes.number,
};

Dropdown.defaultProps = {
  color: theme.colors.primaryColor,
  placeHolder: "select item",
  options: [],
  defaultValue: null,
  value: null,
  disabled: false,
  wrapperStyle: null,
  valueStyle: null,
  dropdownStyle: null,
  arrowContainerStyle: null,
  error: false,
  leftIcon: null,
  leftIconColor: null,
  rightIcon: null,
  rightIconColor: null,
  contained: false,
  borderRadius: 4,
};

export default Dropdown;
