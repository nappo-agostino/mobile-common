import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import theme from "../../../styles/theme";
import icons from "../../../assets/images/chat";
import StyledText from "../StyledText";
import NotificationBadge from "./NotificationBadge";

const Wrapper = styled.TouchableOpacity`
  border-radius: 5px;
  overflow: hidden;
  min-width: ${({ enableMinWidth }) => (enableMinWidth ? "75px" : "0px")};
  min-height: 40px;
  justify-content: flex-end;
  margin-horizontal: 5px;
`;

const RoomBadge = ({ notificationValue = 0, onPress }) => {
  return (
    <Wrapper enableMinWidth={notificationValue > 0} onPress={onPress}>
      {notificationValue > 0 && (
        <NotificationBadge
          containerStyle={{ position: "absolute", zIndex: 5, right: 0, top: 0 }}
          value={15}
        />
      )}
      <LinearGradient
        colors={[theme.colors.secondaryColor, theme.colors.primaryColor]}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        style={{
          width: 60,
          height: 35,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 5,
        }}
      >
        <SvgXml
          width={12}
          height={12}
          xml={icons.keyIcon}
          style={{ marginRight: 5 }}
        />
        <StyledText fontFamily="roboto-bold" fontSize={20} color="white">
          201
        </StyledText>
      </LinearGradient>
    </Wrapper>
  );
};

export default RoomBadge;
