import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import StyledText from "../../StyledText";

const OptionRow = ({ option }) => {
  return (
    <View
      style={{
        height: 50,
        textTransform: "capitalize",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        ...option.labelContainerStyle,
      }}
    >
      {option?.leftIcon && (
        <SvgXml
          xml={option.leftIcon}
          height={40}
          fill={option.leftIconColor || option.rowColor}
          style={{ marginRight: 5, ...option.iconStyle }}
        />
      )}
      <StyledText
        style={{ textTransform: "capitalize", ...option.labelStyle }}
        color={option.rowColor}
      >
        {option.label}
      </StyledText>
    </View>
  );
};

export default OptionRow;
