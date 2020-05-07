import React from "react";
import { View } from "react-native";

const Line = ({ color, width = 30 }) => {
  return (
    <View
      style={{
        width,
        // width: "100%",
        // flex: 1,
        marginHorizontal: 5,
        borderBottomColor: color,
        borderBottomWidth: 1,
      }}
    />
  );
};

export default Line;
