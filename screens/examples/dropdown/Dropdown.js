import React from "react";
import { APP_TYPES } from "../../../app.types";
import { Dropdown as CustomDropdown } from "../../../components";
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

export default Dropdown;
