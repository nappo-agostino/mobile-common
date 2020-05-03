import React from "react";
import { CustomButton } from "../shared";

const Button = ({ onPress }) => {
  return (
    <CustomButton
      text="button"
      onPress={onPress}
      textStyle={{ fontWeight: "bold", color: "white" }}
      uppercase
    />
  );
};

export default Button;
