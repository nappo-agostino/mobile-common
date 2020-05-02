import React from "react";
import { Image } from "react-native";
import { Overlay } from "react-native-elements";
import Signature from "react-native-signature-canvas";
import styled from "styled-components/native";
import { TranslateTextComponent } from "../../../translator";

const Container = styled.View``;

const SignatureContainer = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${props => props.theme.colors.borderColor};
  height: 101px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: white;
`;

// SIGNATURE WEB STYLE
const style = `
.m-signature-pad--footer .description{
  display:none;
}
.m-signature-pad--body{
  margin: 0px; padding: 0px;
  border: 1px solid blue;
  border: none;
}
.m-signature-pad{
  border:none;
  box-shadow: none;
}
.m-signature-pad--footer
  .button {
    text-transform: uppercase;
  }
  `;

const OverlaySignature = ({
  containerStyle,
  signature,
  isModalSignatureVisible,
  openModalSignature,
  closeModalSignature,
  onOkPress,
  clearText,
  confirmText
}) => {
  return (
    <Container style={containerStyle}>
      <TranslateTextComponent
        fontFamily="roboto-bold"
        fontSize={16}
        capitalize
        style={{ marginTop: 10, marginBottom: 5 }}
      >
        signature
      </TranslateTextComponent>
      <SignatureContainer onPress={openModalSignature}>
        {signature && (
          <Image
            style={{ width: "100%", height: 100 }}
            source={{ uri: signature }}
          />
        )}
      </SignatureContainer>
      <Overlay
        height={160}
        isVisible={isModalSignatureVisible}
        onBackdropPress={closeModalSignature}
      >
        <Signature
          onOK={onOkPress}
          onEmpty={closeModalSignature}
          clearText={clearText}
          confirmText={confirmText}
          webStyle={style}
        />
      </Overlay>
    </Container>
  );
};

export default OverlaySignature;
