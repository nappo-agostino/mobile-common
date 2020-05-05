import React from "react";
import Dropdown from "./components/Dropdown";
import theme from "../../../styles/theme";

const AppLocalDropdown = ({
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
}) => {
  return (
    <Dropdown
      contained={contained}
      color={theme.appLocal.primaryColor}
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
      rightIconColor={rightIconColor}
      borderRadius={borderRadius}
    />
  );
};

export default AppLocalDropdown;
