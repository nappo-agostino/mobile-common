import React, { useState } from "react";
import { View } from "react-native";
import {
  CustomCheckBox,
  StyledText,
  CustomRadioButton,
} from "../../components/shared";

const CheckBoxAndRadioExample = (props) => {
  const [checkBox, setCheckBox] = useState(false);
  const [radio, setRadio] = useState(false);

  const handleCheckBox = () => {
    setCheckBox((prevState) => !prevState);
  };

  const handleRadio = (value) => {
    setRadio(value);
  };
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <CustomCheckBox
        isChecked={checkBox}
        onClick={handleCheckBox}
        rightText="check box text"
      />

      <CustomCheckBox
        isChecked={checkBox}
        onClick={handleCheckBox}
        rightText="styled text"
        rightTextStyle={{ fontSize: 20, color: "green" }}
      />

      <CustomCheckBox
        isChecked={checkBox}
        onClick={handleCheckBox}
        rightTextView={
          <View>
            <StyledText>right component</StyledText>
          </View>
        }
      />
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <CustomRadioButton
          label="radio1"
          isSelected={radio === "radio1"}
          onPress={() => handleRadio("radio1")}
        />
        <CustomRadioButton
          containerStyle={{ marginHorizontal: 10 }}
          label="radio2"
          textStyle={{ color: "green" }}
          isSelected={radio === "radio2"}
          onPress={() => handleRadio("radio2")}
        />
        <CustomRadioButton
          label="disabled"
          disabled
          onPress={() => handleRadio("radio2")}
        />
      </View>
      <CustomRadioButton
        contained
        label="contained radio"
        isSelected={radio === "contained"}
        onPress={() => handleRadio("contained")}
      />
    </View>
  );
};

export default CheckBoxAndRadioExample;
