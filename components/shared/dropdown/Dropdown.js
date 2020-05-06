import React from "react";
import PropTypes from "prop-types";
import { APP_TYPES } from "../../../app.types";
import CustomDropdown from "./components/Dropdown";
import { style, textProps } from "../proptypes";
import arrows from "../../../assets/images/arrows";
import theme from "../../../styles/theme";

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
    arrowContained,
    appType,
  } = props;

  return appType ? (
    <CustomDropdown
      color={theme[APP_TYPES[appType]].borderColor}
      placeHolder={placeHolder}
      options={options}
      defaultValue={defaultValue}
      value={value}
      onSelect={onSelect}
      disabled={disabled}
      wrapperStyle={wrapperStyle}
      valueStyle={valueStyle}
      dropdownStyle={dropdownStyle}
      arrowContainerStyle={arrowContainerStyle}
      error={error}
      contained={contained}
      arrowContained={theme[APP_TYPES[appType]].dropdownProps.arrowContained}
      rightIcon={arrows[theme[APP_TYPES[appType]].dropdownProps.arrowIcon]}
      rightIconColor={theme[APP_TYPES[appType]].dropdownProps.arrowColor}
      borderRadius={theme[APP_TYPES[appType]].borderRadius}
    />
  ) : (
    <CustomDropdown
      contained={contained}
      color={color}
      placeHolder={placeHolder}
      options={options}
      defaultValue={defaultValue}
      value={value}
      onSelect={onSelect}
      disabled={disabled}
      wrapperStyle={wrapperStyle}
      valueStyle={valueStyle}
      dropdownStyle={dropdownStyle}
      arrowContainerStyle={arrowContainerStyle}
      error={error}
      leftIcon={leftIcon}
      leftIconColor={leftIconColor}
      rightIcon={rightIcon}
      arrowContained={arrowContained}
      rightIconColor={rightIconColor}
      borderRadius={borderRadius}
    />
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
  arrowContained: PropTypes.bool,
  appType: PropTypes.string,
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
  arrowContained: true,
  appType: null,
};

export default Dropdown;
