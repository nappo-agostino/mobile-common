import React from "react";
import styled from "styled-components";
import StyledText from "../StyledText";

const Badge = styled.View`
  position: absolute;
  top: 0px;
  right: 20px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  height: ${({ badgeHeight }) => badgeHeight}px;
  background-color: ${({ primaryColor }) => primaryColor};
  padding-horizontal: 5px;
  padding-top: 10px;
`;

const BadgeNew = ({
  primaryColor,
  badgeText,
  badgeStyle,
  badgeTextStyle,
  badgeHeight,
}) => {
  return (
    <Badge
      primaryColor={primaryColor}
      badgeHeight={badgeHeight}
      style={{
        elevation: 6,
        shadowColor: "rgba(0,0,0, .4)",
        shadowOffset: { height: 2, width: 0.5 },
        shadowOpacity: 5,
        shadowRadius: 4,
        ...badgeStyle,
      }}
    >
      <StyledText
        color="white"
        fontSize={10}
        fontFamily="roboto-bold"
        style={badgeTextStyle}
      >
        {badgeText}
      </StyledText>
    </Badge>
  );
};

export default BadgeNew;
