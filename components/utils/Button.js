import React from "react";
import { Button as CustomButton } from "../shared";

const Button = ({ onPress }) => {
  return (
    <Button
      text="button"
      onPress={onPress}
      textStyle={{ fontWeight: "bold", color: "white" }}
      uppercase
    />
  );
};

export default Button;
