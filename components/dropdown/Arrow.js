import React from "react";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import arrows from "../../assets/images/arrows";

const ArrowContainer = styled.View`
  position: absolute;
  right: 0;

  background-color: ${({ backgroundColor, contained, arrowContained }) => {
    if (contained) return backgroundColor;
    return arrowContained ? backgroundColor : "white";
  }};
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
  arrowContained,
  contained,
}) => {
  const getIconColor = () => {
    let arrowColor = color;
    if (!arrowContained) {
      if (iconColor) {
        arrowColor = iconColor;
      }
    } else {
      arrowColor = "white";
    }
    return arrowColor;
  };

  return (
    <ArrowContainer
      arrowContained={arrowContained}
      contained={contained}
      backgroundColor={color}
      style={arrowContainerStyle}
      onLayout={(layout) =>
        updateArrowContainerWidth(layout.nativeEvent.layout.width)
      }
    >
      {icon ? (
        <SvgXml xml={icon} fill={getIconColor()} />
      ) : (
        <SvgXml xml={arrows.arrowDownIcon} fill={getIconColor()} />
      )}
    </ArrowContainer>
  );
};

export default Arrow;
