import React from "react";
import { Button as CustomButton } from "../../components";

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
