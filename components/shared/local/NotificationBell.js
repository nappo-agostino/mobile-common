import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import StyledText from "../StyledText";
import notificationIcon from "../../../assets/images/header/notification.svg";

const Container = styled(SvgXml).attrs({
  width: 18.7,
  height: 22,
  xml: notificationIcon,
})``;

const NotificationCircle = styled.View`
  position: absolute;
  top: -9px;
  right: -10px;
  width: 17px;
  height: 17px;
  border-radius: 100px;
  background-color: red;
  justify-content: flex-end;
  align-items: center;
`;

const NotificationBell = ({
  containerStyle,
  notificationStyle,
  value,
  onPress,
}) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Container />
      {value > 0 && (
        <NotificationCircle style={notificationStyle}>
          <StyledText
            color="white"
            style={{ position: "absolute", top: -3, flex: 1 }}
          >
            {value}
          </StyledText>
        </NotificationCircle>
      )}
    </TouchableOpacity>
  );
};

export default NotificationBell;
