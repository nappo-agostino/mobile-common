import React, { useContext } from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import StyledText from "../StyledText";
import newChatIcon from "../../../assets/images/chat/new-chat-button.svg";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { capitalizeFirstLetter, translate } from "../../../translator";

const Container = styled.TouchableOpacity`
  margin-horizontal: 5px;
  width: ${({ containerWidth }) =>
    containerWidth ? `${containerWidth}px` : "auto"};
  height: ${({ containerHeight }) =>
    containerHeight ? `${containerHeight}px` : "auto"};
  align-items: center;
  min-width: ${({ userBalloonSize }) =>
    userBalloonSize
      ? `${userBalloonSize + ((userBalloonSize / 2) * 60) / 100}px`
      : "0px"};
  justify-content: center;
`;

const UserBalloon = styled.View`
  position: relative;
  background-color: white;
  border-color: ${({ theme: { colors } }) => colors.borderColor};
  border-width: 2px;
  height: ${({ userBalloonSize }) => `${userBalloonSize}px`};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

const AvatarImage = styled.Image`
  border-radius: 100px;
`;

const Notification = styled.View`
  display: ${({ notificationsNumber }) =>
    notificationsNumber > 0 ? "flex" : "none"};
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: ${({ theme: { colors } }) => colors.chatNotificationColor};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border-color: white;
  border-width: 1px;
`;

const UserAvatar = ({
  newChat,
  containerWidth,
  containerHeight,
  userBalloonSize = 40,
  iconSize = 40,
  imageURI = "",
  notificationsNumber = 0,
  label,
  onNewChatPress,
  onUserChatPress
}) => {
  const { language } = useContext(LanguageContext);

  return newChat ? (
    <Container
      containerWidth={containerWidth}
      containerHeight={containerHeight}
      onPress={onNewChatPress}
    >
      <SvgXml width={iconSize} height={iconSize} xml={newChatIcon} />
      <StyledText fontSize={10} style={{ marginTop: 5 }}>
        {capitalizeFirstLetter(translate("new-chat", language))}
      </StyledText>
    </Container>
  ) : (
    <Container
      containerWidth={containerWidth}
      containerHeight={containerHeight}
      userBalloonSize={userBalloonSize}
      notificationsNumber={notificationsNumber}
      onPress={onUserChatPress}
    >
      <UserBalloon userBalloonSize={userBalloonSize}>
        <AvatarImage
          source={{
            uri: imageURI
          }}
          style={{
            width: userBalloonSize - (userBalloonSize * 5) / 100,
            height: userBalloonSize - (userBalloonSize * 5) / 100
          }}
        />
      </UserBalloon>
      {notificationsNumber > 0 && (
        <Notification
          notificationsNumber={notificationsNumber}
          size={userBalloonSize - (userBalloonSize * 60) / 100}
          style={{ zIndex: 100 }}
        >
          <StyledText fontFamily="roboto-medium" fontSize={10} color="white">
            {notificationsNumber}
          </StyledText>
        </Notification>
      )}
      {label && (
        <StyledText fontSize={10} style={{ marginTop: 5 }}>
          {label}
        </StyledText>
      )}
    </Container>
  );
};

export default UserAvatar;
