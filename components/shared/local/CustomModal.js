import React from "react";
import styled from "styled-components/native";
import { Overlay } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { SvgXml } from "react-native-svg";
import theme from "../../../styles/theme";
import successIcon from "../../../assets/images/customModal/success.svg";
import dangerIcon from "../../../assets/images/customModal/error.svg";

const Wrapper = styled(Overlay).attrs(
  ({
    isVisible,
    windowBackgroundColor,
    overlayBackgroundColor,
    overlayWidth,
    overlayHeight,
  }) => ({
    isVisible,
    windowBackgroundColor,
    overlayBackgroundColor,
    width: overlayWidth,
    height: overlayHeight,
    overlayStyle: {
      padding: 0,
      borderRadius: 10,
      overflow: "hidden",
    },
  })
)`
  flex: 1;
  width: "100%";
`;

const Header = styled(LinearGradient)`
  min-height: 72px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const getDefaultHeaderColors = (headerType) => {
  if (headerType === "success") return [theme.colors.green, theme.colors.green];
  if (headerType === "notAvailable")
    return [
      theme.colors.firstModalNotAvailableColor,
      theme.colors.secondModalNotAvailableColor,
    ];
  return [
    theme.colors.firstModalDangerColor,
    theme.colors.secondModalDangerColor,
  ];
};

const getDefaultHeaderIcon = (headerType) => {
  if (headerType === "success")
    return <SvgXml width={52} height={39} xml={successIcon} />;
  return <SvgXml width={39} height={39} xml={dangerIcon} />;
};

const CustomModal = ({
  isVisible,
  windowBackgroundColor = theme.colors.backdropColor,
  overlayBackgroundColor,
  width = "90%",
  height = "70%",
  showHeader,
  headerType,
  headerColors = [],
  headerLocations = [0.0, 1.0],
  headerStart = [0.0, 0.5],
  headerEnd = [1.0, 0.5],
  headerStyle,
  containerStyle,
  headerContent,
  children,
  closeModal,
}) => {
  return (
    <Wrapper
      isVisible={isVisible}
      windowBackgroundColor={windowBackgroundColor}
      overlayBackgroundColor={overlayBackgroundColor}
      overlayWidth={width}
      overlayHeight={height}
      onBackdropPress={closeModal}
    >
      <>
        {showHeader && (
          <Header
            colors={
              headerColors.length > 0
                ? headerColors
                : getDefaultHeaderColors(headerType)
            }
            start={headerStart}
            end={headerEnd}
            locations={headerLocations}
            style={headerStyle}
          >
            {headerContent || getDefaultHeaderIcon(headerType)}
          </Header>
        )}
        <Container style={containerStyle}>{children}</Container>
      </>
    </Wrapper>
  );
};

export default CustomModal;
