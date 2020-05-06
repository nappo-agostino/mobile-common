import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import StyledText from "../StyledText";
import Button from "../button/components/Button";

const Wrapper = styled.View`
  /* margin-horizontal: 10px; */
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
      <View
        // onLayout={layout => setViewHeight(layout.nativeEvent.layout.height)}
        onLayout={(layout) => setHeight(layout.nativeEvent.layout.height)}
      >
        {children}
      </View>

      {buttonText && (
        <Button
          backgroundColor="#70C770"
          style={{ marginTop: 10 }}
          onPress={onSubmit}
          // onPress={() => {
          //   modalContext.openModal({
          //     modalClass: "question",
          //     cancelText: "not-now",
          //     submitText: "continue",

          //     content: modalContent || (
          //       <StyledText
          //         fontFamily="roboto-regular"
          //         fontSize={18}
          //         capitalize
          //         style={{ textAlign: "center" }}
          //       >
          //         {modalTextKey}
          //       </StyledText>
          //     ),
          //     onCancelPress: () => modalContext.closeModal(),
          //     onButtonPress: () => {
          //       modalContext.closeModal();
          //       if (onSubmit) onSubmit();
          //     },
          //   });
          // }}
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
