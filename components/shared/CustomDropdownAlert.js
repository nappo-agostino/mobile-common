import React from "react";
import PropTypes from "prop-types";
import DropdownAlert from "react-native-dropdownalert";
import { textProps, defaultTextProps } from "./proptypes";

const CustomDropdownAlert = (props) => {
  const {
    dropDownAlertRef,
    titleStyle,
    messageStyle,
    closeInterval,
    renderImage,
  } = props;
  return (
    <DropdownAlert
      zIndex={1}
      renderImage={renderImage}
      updateStatusBar={false}
      // containerStyle={{ marginTop: 100 }}
      ref={dropDownAlertRef}
      titleNumOfLines={2}
      titleStyle={titleStyle}
      messageStyle={messageStyle}
      tapToCloseEnabled
      // inactiveStatusBarStyle="dark-content"
      messageNumOfLines={0}
      closeInterval={closeInterval}
    />
  );
};

CustomDropdownAlert.propTypes = {
  dropDownAlertRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  closeInterval: PropTypes.number,
  textStyle: PropTypes.shape({ ...textProps, textAlign: PropTypes.string }),
  messageStyle: PropTypes.shape({ ...textProps, textAlign: PropTypes.string }),
  renderImage: PropTypes.func,
};

CustomDropdownAlert.defaultProps = {
  closeInterval: 3000,
  textStyle: { ...defaultTextProps, textAlign: "center", color: "white" },
  messageStyle: { ...defaultTextProps, textAlign: "center", color: "white" },
  renderImage: () => null,
};

export default CustomDropdownAlert;
