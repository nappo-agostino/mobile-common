import React from "react";
import { View } from "react-native";
import StyledText from "../StyledText";

const Label = ({
  labelTextStyle,
  labelFontSize,
  labelFontFamily,
  labelColor,
  label,
  info,
  required,
  requiredColor,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 3,
      }}
    >
      <StyledText
        style={labelTextStyle}
        fontSize={labelFontSize}
        fontFamily={labelFontFamily}
        color={labelColor}
        capitalize
      >
        {label}
      </StyledText>
      {info && (
        <StyledText
          style={labelTextStyle}
          fontSize={12}
          fontFamily="roboto-regular"
          color={labelColor}
          capitalize
        >
          {info}
        </StyledText>
      )}
      {required && (
        <StyledText color={requiredColor} style={{ marginLeft: 2, top: -3 }}>
          *
        </StyledText>
      )}
    </View>
  );
};

export default Label;
