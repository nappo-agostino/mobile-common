import React from "react";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import arrows from "../../../../assets/images/arrows";
import theme from "../../../../styles/theme";

const ArrowContainer = styled.View`
  position: absolute;
  right: 0;
  background-color: ${({ color }) => color};
  width: 30px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

const Arrow = ({
  color,
  icon,
  iconColor,
  arrowContainerStyle,
  updateArrowContainerWidth,
}) => {
  //   const getFillColor = () => {
  //     switch (appType) {
  //       case APP_TYPES.APP_LOCAL:
  //         return "white";
  //       case APP_TYPES.APP_MOH:
  //         return "#707071";
  //       default:
  //         return theme.colors.defaultColor;
  //     }
  //   };

  //   const getBackGroundColor = () => {
  //     switch (appType) {
  //       case APP_TYPES.APP_LOCAL:
  //         return color;
  //       case APP_TYPES.APP_MOH:
  //         return "white";
  //       default:
  //         return "white";
  //     }
  //   };

  //   const getIcon = () => {
  //     switch (appType) {
  //       case "app-local":
  //         return arrows.arrowDownIcon;
  //       case "app-moh":
  //         return arrows.arrowDropdown;
  //       default:
  //         return arrows.arrowDropdown;
  //     }
  //   };
  return (
    <ArrowContainer
      color={color}
      style={arrowContainerStyle}
      onLayout={(layout) =>
        updateArrowContainerWidth(layout.nativeEvent.layout.width)
      }
    >
      {icon ? (
        <SvgXml xml={icon} fill={iconColor || "white"} />
      ) : (
        <SvgXml xml={arrows.arrowDownIcon} fill={iconColor || "white"} />
        // <Triangle direction="bottom" color="white" size={6} />
      )}
    </ArrowContainer>
  );
};

export default Arrow;
