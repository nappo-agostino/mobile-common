import React from "react";
import PropTypes from "prop-types";
import RNCheckBox from "react-native-check-box";
import theme from "../styles/theme";
import StyledText from "./StyledText";
import { textProps, containerPropsStyle } from "./proptypes";

const CheckBox = (props) => {
  const {
    isChecked,
    disabled,
    onClick,
    rightText,
    rightTextView,
    rightTextStyle,
    containerStyle,
    uncheckedColor,
    checkedColor,
  } = props;
  return (
    <RNCheckBox
      style={{ marginLeft: -3, paddingTop: 5, ...containerStyle }}
      uncheckedCheckBoxColor={uncheckedColor}
      checkedCheckBoxColor={checkedColor}
      isChecked={isChecked}
      disabled={disabled}
      onClick={onClick}
      rightText={rightText}
      rightTextView={rightTextView}
      rightTextStyle={rightTextStyle}
    />
  );
};

CheckBox.propTypes = {
  isChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  rightText: PropTypes.string,
  rightTextView: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    StyledText,
  ]),
  rightTextStyle: PropTypes.shape(textProps),
  containerStyle: PropTypes.shape(containerPropsStyle),
  uncheckedColor: PropTypes.string,
  checkedColor: PropTypes.string,
};

CheckBox.defaultProps = {
  isChecked: false,
  disabled: false,
  rightText: null,
  rightTextView: null,
  rightTextStyle: null,
  containerStyle: null,
  uncheckedColor: theme.colors.activeTintColor,
  checkedColor: theme.colors.activeTintColor,
};

export default CheckBox;
