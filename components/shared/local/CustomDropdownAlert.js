import React from "react";
import DropdownAlert from "react-native-dropdownalert";

const CustomDropdownAlert = ({ dropDownAlertRef }) => {
  return (
    <DropdownAlert
      zIndex={1}
      renderImage={() => null}
      updateStatusBar={false}
      // containerStyle={{ marginTop: 100 }}
      ref={dropDownAlertRef}
      titleNumOfLines={2}
      titleStyle={{
        fontFamily: "roboto-medium",
        color: "white",
        textAlign: "center"
      }}
      messageStyle={{
        fontFamily: "roboto-medium",
        color: "white",
        textAlign: "center"
      }}
      tapToCloseEnabled
      // inactiveStatusBarStyle="dark-content"
      messageNumOfLines={0}
      closeInterval={3000}
    />
  );
};

export default CustomDropdownAlert;
