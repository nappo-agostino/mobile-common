/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Platform, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import moment from "moment";
import { Overlay } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TranslateTextComponent } from "../../../translator";

import icons from "../../../assets/images/controlCenter";
import CustomButton from "./CustomButton";
import theme from "../../../styles/theme";

const Container = styled.View`
  height: 100%;
  flex: ${({ flexibleContainer }) => (flexibleContainer ? 1 : 0)};
`;

const SelectedValueContainer = styled.TouchableOpacity`
  justify-content: center;
  border-color: ${({ theme: { colors }, error, color }) => {
    if (error) return colors.red;
    return color || colors.primaryColor;
  }};
  border-width: 1px;
  flex: 1;
  width: 100%;
  height: 38px;
  border-radius: 4px;
  overflow: hidden;
`;

const IconContainer = styled.View`
  position: absolute;
  right: 0px;
  top: 0px;
  height: 100%;
  min-width: 36px;
  background-color: ${({ theme: { colors }, color }) =>
    color || colors.primaryColor};
`;

const DatePicker = ({
  color,
  disabled,
  mode,
  type = "date",
  is24Hour,
  hideIcon,
  containerStyle,
  flexibleContainer = true,
  label,
  labelStyle,
  labelFontSize = 13,
  labelFontFamily = "roboto-medium",
  resetLabel,
  selectedValueContainerStyle,
  onResetData,
  date,
  time,
  onChangeDate,
  onChangeTime,
  error,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const getDate = () => {
    if (mode === "datetime") {
      return date && time
        ? `${moment(date).format("DD/MM/YYYY")} - ${moment(time).format(
            "HH:mm"
          )}`
        : "DD/MM/YYYY - HH:MM";
    }
    if (type === "time") {
      return date ? `${moment(date).format("HH:mm")}` : "HH:mm";
    }
    return date ? `${moment(date).format("DD/MM/YYYY")}` : "DD/MM/YYYY";
  };

  const openIosTimePicker = () => {
    setShowDatePicker(false);
    setShowTimePicker(true);
    if (date === null) {
      onChangeDate(new Date());
    }
  };
  const closeIosTimePicker = () => {
    setShowTimePicker(false);

    onChangeTime(new Date());
  };
  const closeIosDatePicker = () => {
    setShowDatePicker(false);

    if (date === null || (type === "time" && date === null)) {
      onChangeDate(new Date());
    }
  };
  return (
    <Container
      style={{ ...containerStyle }}
      flexibleContainer={flexibleContainer}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {label && (
          <TranslateTextComponent
            capitalize
            style={{ paddingBottom: 5, ...labelStyle }}
            fontSize={labelFontSize}
            fontFamily={labelFontFamily}
          >
            {label}
          </TranslateTextComponent>
        )}
        {resetLabel && (
          <TouchableOpacity
            style={{
              paddingBottom: 5,
            }}
            onPress={onResetData}
          >
            <TranslateTextComponent
              capitalize
              style={{ textDecorationLine: "underline", ...labelStyle }}
              color={theme.colors.cancelColor}
              fontSize={labelFontSize}
              fontFamily="roboto-regular"
            >
              {resetLabel}
            </TranslateTextComponent>
          </TouchableOpacity>
        )}
      </View>
      <SelectedValueContainer
        color={color}
        error={error}
        style={selectedValueContainerStyle}
        disabled={disabled}
        onPress={() => setShowDatePicker(true)}
      >
        {!hideIcon && (
          <IconContainer color={color}>
            <SvgXml
              height={18.5}
              width={18.5}
              xml={type === "time" ? icons.whiteTimeIcon : icons.calendarIcon}
              fill="white"
              style={{
                position: "absolute",
                top: 18 / 2,
                left: 18 / 2,
              }}
            />
          </IconContainer>
        )}
        <TranslateTextComponent
          fontFamily="roboto-light"
          style={{ paddingHorizontal: 5 }}
          color={date ? "black" : "#404040"}
        >
          {getDate()}
        </TranslateTextComponent>
      </SelectedValueContainer>
      {showDatePicker && Platform.OS === "android" && (
        <DateTimePicker
          value={date ? new Date(date) : new Date()}
          mode={type}
          is24Hour={is24Hour}
          display="default"
          onChange={(type, date) => {
            setShowDatePicker(false);
            if (date) {
              onChangeDate(date);

              setShowTimePicker(true);
            }
          }}
        />
      )}

      {mode === "datetime" && showTimePicker && Platform.OS === "android" && (
        <DateTimePicker
          value={date ? new Date(date) : new Date()}
          mode="time"
          is24Hour={is24Hour}
          display="default"
          onChange={(type, date) => {
            setShowDatePicker(false);
            if (date) {
              setShowTimePicker(false);
              onChangeTime(date);
            }
          }}
        />
      )}

      {showDatePicker && Platform.OS === "ios" && (
        <Overlay
          isVisible={showDatePicker}
          onBackdropPress={() => setShowDatePicker(false)}
          overlayStyle={{ maxHeight: 280, maxWidth: "80%" }}
        >
          <View>
            <DateTimePicker
              value={date ? new Date(date) : new Date()}
              mode={type}
              is24Hour={is24Hour}
              display="default"
              onChange={(type, date) => {
                //   closeDatePicker();
                if (date) {
                  onChangeDate(date);
                  // onChangeTime(date);
                }
              }}
            />
            <View
              style={{
                alignItems: "flex-end",
              }}
            >
              <CustomButton
                text="ok"
                onPress={() =>
                  mode === "datetime"
                    ? openIosTimePicker()
                    : closeIosDatePicker()
                }
                style={{ borderRadius: 0, width: 50 }}
              />
            </View>
          </View>
        </Overlay>
      )}

      {Platform.OS === "ios" && showTimePicker && (
        <Overlay
          isVisible={showTimePicker}
          onBackdropPress={() => setShowTimePicker(false)}
          overlayStyle={{ maxHeight: 280, maxWidth: "80%" }}
        >
          <View>
            <DateTimePicker
              value={time ? new Date(time) : new Date()}
              mode="time"
              display="default"
              onChange={(type, date) => {
                if (date) {
                  onChangeTime(date);
                }
              }}
            />
            <View
              style={{
                alignItems: "flex-end",
              }}
            >
              <CustomButton
                text="ok"
                onPress={() =>
                  time === null
                    ? closeIosTimePicker()
                    : setShowTimePicker(false)
                }
                style={{ borderRadius: 0, width: 50 }}
              />
            </View>
          </View>
        </Overlay>
      )}
    </Container>
  );
};

export default DatePicker;
