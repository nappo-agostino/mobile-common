import React, { useRef } from "react";
import { View } from "react-native";
import { DropdownAlert, StyledText } from "../../components/shared";
import Button from "../../utils/components/Button";

const DropdownAlertExample = () => {
  const dropDownAlertRef = useRef(null);

  const openAlert = (type, title, message) => {
    dropDownAlertRef.current.alertWithType(
      type,
      title,
      message.charAt(0).toUpperCase() + message.slice(1)
    );
  };

  return (
    <>
      <DropdownAlert dropDownAlertRef={dropDownAlertRef} />
      <StyledText color="green">test</StyledText>
      <View style={{ flex: 1, margin: 20 }}>
        <Button
          onPress={() => openAlert("success", "title", "success with title")}
        />
        <Button onPress={() => openAlert("error", "", "error without title")} />
      </View>
    </>
  );
};

export default DropdownAlertExample;
