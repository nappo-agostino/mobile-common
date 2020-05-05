import React from "react";
import { APP_TYPES } from "../../../appTypes";

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
    appType,
  } = props;
  const getDropdownByType = () => {
    switch (appType) {
      case APP_TYPES.APP_LOCAL:
        return null;
      //     return <AppLocalDropdown   props/>

      //   ;
      default:
        return (
          <Dropdown
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
            rightIconColor={rightIconColor}
            borderRadius={borderRadius}
          />
        );
    }
  };
  return getDropdownByType();
};

export default Dropdown;
