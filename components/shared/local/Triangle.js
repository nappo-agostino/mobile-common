import React from "react";
import styled from "styled-components/native";

const TriangleForm = styled.View`
  width: 0px;
  height: 0px;
  background-color: transparent;
  border-style: solid;
  border-left-width: ${({ size }) => (size ? `${size}px` : "10px")};
  border-right-width: ${({ size }) => (size ? `${size}px` : "10px")};
  border-bottom-width: ${({ size }) => (size ? `${size * 2}px` : "20px")};
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: ${({ color }) => color || "black"};
  transform: ${({ direction }) => `rotate(${direction})`};
`;

const getDegrees = direction => {
  switch (direction) {
    case "up":
      return "0deg";
    case "top":
      return "0deg";
    case "right":
      return "90deg";
    case "down":
      return "180deg";
    case "bottom":
      return "180deg";
    case "left":
      return "-90deg";
    default:
      return "0deg";
  }
};

const Triangle = ({ style, color, size, direction }) => {
  return (
    <TriangleForm
      style={style}
      color={color}
      size={size}
      direction={getDegrees(direction)}
    />
  );
};
export default Triangle;
