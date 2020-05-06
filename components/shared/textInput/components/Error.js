import React from "react";
import { View } from "react-native";
import StyledText from "../../StyledText";

const Error = ({ error, fontFamily, errorColor }) => {
  return (
    <View style={[{ height: 18, marginLeft: 30 }]}>
      {error && (
        <StyledText
          fontFamily={fontFamily}
          color={errorColor}
          fontSize={10}
          capitalize
          style={{ paddingTop: 2 }}
        >
          {error}
        </StyledText>
      )}
    </View>
  );
};

export default Error;
