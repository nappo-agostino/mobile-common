import React from "react";
import CheckBox from "react-native-check-box";
import theme from "../../../styles/theme";

const CustomCheckBox = ({
  isChecked,
  disabled,
  onClick,
  rightText,
  rightTextView,
  rightTextStyle,
  containerStyle,
  color,
}) => {
  return (
    <CheckBox
      style={{ marginLeft: -3, paddingTop: 5, ...containerStyle }}
      uncheckedCheckBoxColor={color || theme.colors.borderColor}
      checkedCheckBoxColor={color || theme.colors.primaryColor}
      isChecked={isChecked}
      disabled={disabled}
      onClick={onClick}
      rightText={rightText}
      rightTextView={rightTextView}
      rightTextStyle={{
        fontFamily: "roboto-regular",
        fontSize: 14,
        ...rightTextStyle,
      }}
    />
  );
};

export default CustomCheckBox;
