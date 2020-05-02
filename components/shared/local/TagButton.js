import React from "react";
import { TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SvgXml } from "react-native-svg";
import StyledText from "../StyledText";
import theme from "../../../styles/theme";

import removeTagIcon from "../../../assets/images/remove-tag.svg";

const TagButton = ({ text, onTagPress }) => {
  return (
    <LinearGradient
      colors={["#349BCF", "#1DA7E4", "#00B7FF"]}
      style={{ borderRadius: 20, padding: 6, margin: 5 }}
    >
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={onTagPress}
      >
        <StyledText
          fontFamily="roboto-bold"
          fontSize={13}
          color="white"
          style={{ textTransform: "capitalize" }}
        >
          {text}
        </StyledText>

        <View
          style={{
            marginLeft: 5,
            backgroundColor: "white",
            borderRadius: 50,
            padding: 6,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SvgXml fill={theme.colors.primaryColor} xml={removeTagIcon} />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default TagButton;
