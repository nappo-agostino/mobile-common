import React, { useState } from "react";
import { View, TouchableOpacity, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Overlay } from "react-native-elements";

import CalendarDataPicker from "../scheduling/CalendarDataPicker";
import { DEVICE_WIDTH } from "../../utils/dimensions";

const OverlayDatePicker = ({
  height,
  borderWidth,
  value,
  onChangeDate,
  borderColor,
  textColor,
  iconColor,
  borderRadius
}) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsDatePickerVisible(true)}
        style={{
          borderWidth: borderWidth || 1,
          borderColor,

          height,
          borderRadius,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: textColor }}>{value || "YYYY-MM-DD"}</Text>
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Ionicons
            name={Platform.OS === "ios" ? "ios-calendar" : "md-calendar"}
            color={iconColor}
            size={24}
          />
          {/* <Image source={require('../../assets/images/events/_calendar.png')} style={{ tintColor: primaryColor, width: '100%' }} /> */}
        </View>
      </TouchableOpacity>
      <Overlay
        height="auto"
        isVisible={isDatePickerVisible}
        onBackdropPress={() => setIsDatePickerVisible(false)}
      >
        <CalendarDataPicker
          value={value}
          width={DEVICE_WIDTH - 60 || "auto"}
          onChangeDate={onChangeDate}
        />
      </Overlay>
    </View>
  );
};

export default OverlayDatePicker;
