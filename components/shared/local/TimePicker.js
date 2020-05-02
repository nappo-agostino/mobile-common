import React, { useState } from "react";
import styled from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome5 } from "@expo/vector-icons";
import { Platform, View } from "react-native";
import moment from "moment";
import { Overlay } from "react-native-elements";
import { TranslateTextComponent } from "../../../translator";
import StyledText from "../StyledText";
import theme from "../../../styles/theme";
import ModalButton from "./ModalButton";

const Container = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  flex: 1;
`;

const SelectedValueContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-color: ${({ theme: { colors } }) => colors.borderColor};
  border-width: 1px;
  margin-top: 10px;
  flex: 1;
  width: 100%;
  max-height: 35px;
  border-radius: 4px;
  overflow: hidden;
  flex: 1;
`;

const IconContainer = styled.View`
  position: absolute;
  right: 0px;
  top: 0px;
  height: 100%;
  min-width: 35px;
  background-color: ${({ theme: { colors } }) => colors.primaryColor};
`;

const ButtonsContainer = styled.View`
  margin-vertical: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  flex: 1;
  width: 100%;
  max-width: 300px;
`;

const Button = styled.TouchableOpacity`
  border-width: 2px;
  border-color: ${({ theme: { colors } }) => colors.primaryColor};
  border-radius: 9px;
  width: 90px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-vertical: 10px;
  background-color: ${({ selected, theme: { colors } }) =>
    selected ? colors.primaryColor : "white"};
`;

const TimePicker = ({
  text,
  showSelectedValue = true,
  restaurantName,
  onChange,
  closeModal
}) => {
  const [currentValue, setCurrentValue] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showIOSTimePicker, setShowIOSTimePicker] = useState(false);

  const getButtons = () => {
    const buttons = [];

    for (let i = 0; i < 9; i++) {
      const time = moment(currentValue).add(15 * i, "minutes");
      buttons.push(
        <Button
          key={i}
          selected={i === 0}
          onPress={() => setCurrentValue(time)}
        >
          <StyledText
            fontFamily="roboto-medium"
            fontSize={20}
            color={i === 0 ? "white" : theme.colors.primaryColor}
          >
            {moment(time).format("HH:mm")}
          </StyledText>
        </Button>
      );
    }
    return buttons;
  };

  return (
    <Container>
      {(text && (
        <TranslateTextComponent
          capitalize
          style={{ fontSize: 17, textAlign: "center" }}
          vars={{ restaurant: restaurantName }}
        >
          {text}
        </TranslateTextComponent>
      )) || (
        <TranslateTextComponent
          capitalize
          style={{ fontSize: 17, textAlign: "center" }}
        >
          extend-check-out
        </TranslateTextComponent>
      )}
      {showSelectedValue && (
        <SelectedValueContainer
          onPress={() => {
            if (Platform.OS === "android") setShowTimePicker(true);
            else {
              setShowTimePicker(true);
              setShowIOSTimePicker(true);
            }
          }}
        >
          <IconContainer>
            <FontAwesome5
              name="clock"
              size={18.5}
              style={{
                color: "white",
                position: "absolute",
                top: 15 / 2,
                left: 15 / 2
              }}
            />
          </IconContainer>
          <StyledText>{moment(currentValue).format("HH:mm")}</StyledText>
        </SelectedValueContainer>
      )}
      <ButtonsContainer>{getButtons()}</ButtonsContainer>
      {showTimePicker && (
        <DateTimePicker
          mode="time"
          is24Hour
          value={new Date(currentValue)}
          style={{ zIndex: 100 }}
          collapsable
          onChange={(e, date) => {
            if (date) {
              setShowTimePicker(false);
              setCurrentValue(date);
            }
            setShowTimePicker(false);
          }}
        />
      )}
      {showIOSTimePicker && (
        <Overlay
          isVisible={showTimePicker && showIOSTimePicker}
          onBackdropPress={() => {
            setShowTimePicker(false);
            setShowIOSTimePicker(false);
          }}
          overlayStyle={{ maxHeight: 300, maxWidth: "80%" }}
        >
          <View style={{ flex: 1, width: "100%" }}>
            <DateTimePicker
              mode="time"
              is24Hour
              value={new Date(currentValue)}
              style={{ zIndex: 100 }}
              collapsable
              onChange={(e, date) => {
                if (date) {
                  setCurrentValue(date);
                }
              }}
            />
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-end"
              }}
            >
              <ModalButton
                color="green"
                onPress={() => {
                  setShowTimePicker(false);
                  setShowIOSTimePicker(false);
                }}
              >
                ok
              </ModalButton>
            </View>
          </View>
        </Overlay>
      )}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between"
        }}
      >
        <ModalButton
          color="red"
          onPress={() => {
            setShowTimePicker(false);
            closeModal();
          }}
        >
          cancel
        </ModalButton>
        <ModalButton
          color="green"
          onPress={() => {
            onChange(currentValue);
            setShowTimePicker(false);
            closeModal();
          }}
        >
          ok
        </ModalButton>
      </View>
    </Container>
  );
};

export default TimePicker;
