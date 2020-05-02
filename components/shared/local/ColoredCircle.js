import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  border-width: ${({ withoutBorder }) => (withoutBorder ? 0 : "2px")};
  border-color: white;
  border-radius: 100px;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  overflow: hidden;
`;

const Color = styled.View`
  background-color: ${({ color }) => color};
  width: 100%;
  height: 100%;
`;

const ColoredCircle = ({ size = 23, color = "orange", withoutBorder }) => {
  return (
    <Container size={size} withoutBorder={withoutBorder}>
      <Color color={color} />
    </Container>
  );
};

export default ColoredCircle;
