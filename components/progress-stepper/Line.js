import React from "react";
import { View } from "react-native";

const Line = ({ color, width = 30 }) => {
  return (
    <View
      style={{
        width,
        marginHorizontal: 5,
        borderBottomColor: color,
        borderBottomWidth: 1,
      }}
    />
  );
};

export default Line;
