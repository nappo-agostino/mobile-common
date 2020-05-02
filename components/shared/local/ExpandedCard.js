import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { SvgXml } from "react-native-svg";
import { View } from "react-native";
import typy from "typy";
import theme, { primaryColor } from "../../../styles/theme";
import { TranslateTextComponent } from "../../../translator";

import icons from "../../../assets/images/expandedCard";
import StyledText from "../StyledText";

const HeaderActionButton = styled.TouchableOpacity`
  border-radius: 50px;
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ExpandedHeaderCard = ({ guestInHouse }) => {
  return (
    <Row
      style={{
        paddingHorizontal: 5,
      }}
    >
      <Row>
        <SvgXml xml={icons.clientNameIcon} />
        <StyledText
          color="white"
          fontFamily="roboto-bold"
          style={{ textTransform: "capitalize", marginHorizontal: 10 }}
        >
          {typy(guestInHouse, "guest.firstName").safeString}{" "}
          {typy(guestInHouse, "guest.lastName").safeString}
        </StyledText>
        {typy(guestInHouse, "reservation.room.number").safeString !== "" &&
          typy(guestInHouse, "reservation.room.number").safeString !== null && (
            <>
              <SvgXml xml={icons.roomNumberIcon} />
              <StyledText
                color="white"
                fontFamily="roboto-bold"
                style={{ textTransform: "capitalize", marginLeft: 5 }}
              >
                {typy(guestInHouse, "reservation.room.number").safeString}
              </StyledText>
            </>
          )}
      </Row>
      {/* <Row>
        <HeaderActionButton>
          <SvgXml xml={icons.refreshIcon} />
        </HeaderActionButton>
      </Row> */}
    </Row>
  );
};

const Header = styled(LinearGradient)`
  flex-direction: row;
  border-top-right-radius: ${({ borderRadius }) => borderRadius}px;
  border-top-left-radius: ${({ borderRadius }) => borderRadius}px;
  padding: 10px;
  align-items: center;
  height: 40px;
`;

const Container = styled.View`
  padding: 10px;
  background-color: white;
  border-bottom-right-radius: ${({ borderRadius }) => borderRadius}px;
  border-bottom-left-radius: ${({ borderRadius }) => borderRadius}px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
`;

const ExpandedCard = ({
  headerValues,
  headerActions,
  headerValue,
  actionPress,
  headerContent,
  headerIcon,
  headerStyle,
  headerColors = [theme.colors.secondaryColor, theme.colors.primaryColor],
  headerIconSize = 18,
  headerIconStyle,
  headerIconColor,
  headerTitleStyle,
  headerTitle,
  borderRadius = 18,
  containerStyle,
  content,
  children,
}) => {
  return (
    <View
      style={{
        padding: 15,
        paddingTop: 10,
        shadowColor: "rgba(0,0,0, .7)",
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 2,
      }}
    >
      <View
        style={{
          elevation: 7,
          borderRadius,
          overflow: "hidden",
        }}
      >
        <Header
          colors={headerColors}
          borderRadius={borderRadius}
          style={headerStyle}
        >
          <Row style={{ justifyContent: "space-between", flex: 1 }}>
            {headerContent || (
              <>
                {headerValue && <HeaderTitle headerValue={headerValue} />}
                {!headerValue && headerValues && (
                  <HeaderTitles headerValues={headerValues} />
                )}
              </>
            )}
            {headerActions && (
              <HeaderActions
                headerActions={headerActions}
                actionPress={actionPress}
              />
            )}
          </Row>

          {/* {headerContent || (
            <Row style={{ justifyContent: "space-between", flex: 1 }}>
              <Row>
                {headerIcon && (
                  <SvgXml
                    width={headerIconSize}
                    xml={headerIcon}
                    fill={headerIconColor}
                    style={{ marginRight: 10, ...headerIconStyle }}
                  />
                )}
                <TranslateTextComponent
                  fontFamily="roboto-bold"
                  color="white"
                  style={headerTitleStyle}
                  capitalize
                >
                  {headerTitle}
                </TranslateTextComponent>
              </Row>

              {resetCard && (
                <HeaderActionButton onPress={resetCard}>
                  <SvgXml xml={icons.refreshIcon} />
                </HeaderActionButton>
              )}
            </Row>
          )} */}
        </Header>
        {!content && (
          <Container borderRadius={borderRadius} style={containerStyle}>
            {children}
          </Container>
        )}
        {content && children}
      </View>
    </View>
  );
};

export default ExpandedCard;

const HeaderTitle = ({ headerValue }) => {
  const {
    icon,
    iconSize = 18,
    iconColor = "white",
    iconStyle,
    title,
    titleStyle,
  } = headerValue;
  return (
    <Row>
      {icon && (
        <SvgXml
          width={iconSize}
          xml={icon}
          fill={iconColor}
          style={{ marginRight: 10, ...iconStyle }}
        />
      )}
      {title && (
        <TranslateTextComponent
          fontFamily="roboto-bold"
          color="white"
          style={titleStyle}
          capitalize
        >
          {title}
        </TranslateTextComponent>
      )}
    </Row>
  );
};

const HeaderTitles = ({ headerValues }) => {
  return (
    <Row>
      {headerValues &&
        headerValues.map((headerValue, index) => {
          const {
            icon,
            iconSize = 18,
            iconColor = "white",
            title,
            titleStyle,
          } = headerValue;
          return (
            <Row key={index}>
              {icon && (
                <SvgXml
                  width={iconSize}
                  xml={icon}
                  fill={iconColor}
                  style={{ marginRight: 10 }}
                />
              )}
              {title && (
                <TranslateTextComponent
                  fontFamily="roboto-bold"
                  color="white"
                  style={titleStyle}
                  capitalize
                >
                  {title}
                </TranslateTextComponent>
              )}
            </Row>
          );
        })}
    </Row>
  );
};

const HeaderActions = ({ headerActions, actionPress }) => {
  return headerActions === "default" ? (
    <Row>
      <HeaderActionButton onPress={actionPress}>
        <SvgXml width={18} fill={primaryColor} xml={icons.refreshIcon} />
      </HeaderActionButton>
    </Row>
  ) : (
    <Row>
      {headerActions &&
        headerActions.map((headerValue, index) => {
          const {
            icon,
            iconSize = 18,
            iconColor = primaryColor,
            title,
            titleStyle,
            onPress,
          } = headerValue;
          return (
            <Row key={index}>
              {icon && (
                <HeaderActionButton onPress={onPress}>
                  <SvgXml width={iconSize} fill={iconColor} xml={icon} />
                </HeaderActionButton>
              )}
              {title && (
                <TranslateTextComponent
                  fontFamily="roboto-bold"
                  color="white"
                  style={titleStyle}
                  capitalize
                >
                  {title}
                </TranslateTextComponent>
              )}
            </Row>
          );
        })}
    </Row>
  );
};
