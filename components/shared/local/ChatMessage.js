import React from "react";
import styled from "styled-components/native";
import StyledText from "../StyledText";

const Message = styled.View`
  background-color: white;
  flex: 1;
  padding-vertical: 10px;
  padding-horizontal: 15px;
  margin-top: 10px;
`;

const ChatMessage = ({ message }) => {
  return (
    <Message>
      <StyledText
        fontFamily="roboto-medium"
        fontSize={13}
        style={{ marginBottom: 5 }}
      >
        Client request description/ Chat screen
      </StyledText>
      <StyledText fontFamily="roboto-light" fontSize={12}>
        {message}
      </StyledText>
    </Message>
  );
};

export default ChatMessage;
