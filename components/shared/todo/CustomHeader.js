import React from "react";
import { View, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";

import StyledText from "../StyledText";

import arrowBack from "../../assets/images/arrows/arrow-back.svg";
import NotificationBell from "../local/NotificationBell";
import theme from "../../../styles/theme";

const CustomHeader = ({
  title,
  headerStyle,
  titleStyle,
  leftComponent,
  showBackButton,
  showNotificationBell = true,
  notificationBellValue = 0,
  navigation,
}) => {
  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "red",
        },
        { ...headerStyle },
      ]}
    >
      {!showBackButton && leftComponent && (
        <View style={{ position: "absolute", left: 10 }}>{leftComponent}</View>
      )}
      {showBackButton && (
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 60,
            alignItems: "center",
            position: "absolute",
            left: 0,

            height: "100%",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <SvgXml xml={arrowBack} fill={theme.colors.headerTextColor} />
        </TouchableOpacity>
      )}
      {title && (
        <StyledText
          fontFamily="space-mono"
          fontSize={16}
          color={theme.colors.headerTextColor}
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: 25,
            ...titleStyle,
          }}
        >
          {title}
        </StyledText>
      )}
      {showNotificationBell && (
        <NotificationBell
          value={notificationBellValue}
          containerStyle={{ position: "absolute", right: 10 }}
          notificationStyle={{ top: 2, right: 3 }}
          onPress={() => navigation.navigate("Notifications")}
        />
      )}
    </View>
  );
};

export default CustomHeader;
