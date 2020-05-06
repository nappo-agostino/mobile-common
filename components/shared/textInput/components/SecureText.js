import React from "react";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import showPassIcon from "../../../../assets/images/textInput/show-password.svg";

const SecureTextButton = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;

  width: 30px;
`;

const SecureText = ({ onPress, color }) => {
  return (
    <SecureTextButton activeOpacity={0.7} onPress={onPress}>
      <SvgXml xml={showPassIcon} width={25} height={25} fill={color} />
    </SecureTextButton>
  );
};

export default SecureText;
