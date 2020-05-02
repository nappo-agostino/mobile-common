import React, { useState } from "react";
import styled from "styled-components/native";
import { useSpring, animated } from "react-spring/native";
import { View } from "react-native";
import StyledText from "../StyledText";

const Container = styled(animated(View))`
  position: absolute;
  background-color: ${({ backgroundColor, theme: { colors } }) =>
    backgroundColor || colors.saveColor};
  min-height: 40px;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
`;

const Notification = ({ isVisible, backgroundColor, textColor, text }) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const animation = useSpring({
    bottom: isVisible ? -containerHeight : 0,
    config: { duration: 300 }
  });

  return (
    <Container
      backgroundColor={backgroundColor}
      style={animation}
      onLayout={layout => setContainerHeight(layout.nativeEvent.layout.height)}
    >
      <StyledText
        fontFamily="roboto-medium"
        fontSize={16}
        color={textColor || "white"}
      >
        {text}
      </StyledText>
    </Container>
  );
};

export default Notification;
