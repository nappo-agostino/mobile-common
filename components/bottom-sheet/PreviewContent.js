import React, { useState } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import StyledText from "../StyledText";
import Button from "../Button";

const Wrapper = styled.View`
  padding-vertical: 10px;
  background-color: white;
  padding-horizontal: 30px;
  flex-direction: column;
  justify-content: space-between;
`;

const PreviewContent = ({ children, buttonText, onSubmit }) => {
  const [height, setHeight] = useState(false);
  return (
    <Wrapper
      style={{
        borderRadius: 1,
        shadowColor: "rgba(0,0,0, .7)",
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 7,
        height: height > 400 ? null : "100%",
      }}
    >
      <View onLayout={(layout) => setHeight(layout.nativeEvent.layout.height)}>
        {children}
      </View>

      {buttonText && (
        <Button
          backgroundColor="#70C770"
          style={{ marginTop: 10 }}
          onPress={onSubmit}
        >
          <StyledText
            color="white"
            fontFamily="roboto-bold"
            fontSize={16}
            style={{ textTransform: "uppercase" }}
          >
            {buttonText}
          </StyledText>
        </Button>
      )}
    </Wrapper>
  );
};

export default PreviewContent;
