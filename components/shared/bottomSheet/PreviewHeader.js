import React from "react";
import { SvgXml } from "react-native-svg";
import { View } from "react-native";

import styled from "styled-components/native";

import theme from "../../../styles/theme";
import StyledText from "../StyledText";

import closeButtonPreviewIcon from "../../../assets/images/bottomSheet/close-button-preview.svg";

const BottomSheetHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* margin-horizontal: 10px; */
  background-color: ${(props) => props.theme.colors.secondaryColor};
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  position: relative;
  padding-horizontal: 10px;
  height: 44px;
`;

const CloseBottomSheetHeaderButton = styled.TouchableOpacity`
  background-color: white;
  border-radius: 50px;
  position: absolute;
  right: 10px;
`;

const PreviewHeader = ({ headerText, content, closePreview }) => {
  return (
    <BottomSheetHeader
    // style={{
    //   borderRadius: 1,
    //   shadowColor: "rgba(0,0,0, .7)",
    //   shadowOffset: { height: 0, width: 0 },
    //   shadowOpacity: 1,
    //   shadowRadius: 2,
    //   elevation: 4
    // }}
    >
      {content}
      {headerText && (
        <View style={{ flex: 1, alignItems: "center" }}>
          <StyledText
            style={{ textTransform: "capitalize" }}
            fontFamily="roboto-bold"
            color="white"
            fontSize={20}
          >
            {headerText}
          </StyledText>
        </View>
      )}
      <CloseBottomSheetHeaderButton onPress={closePreview}>
        <SvgXml
          width={25}
          height={25}
          fill={theme.colors.primaryColor}
          xml={closeButtonPreviewIcon}
        />
      </CloseBottomSheetHeaderButton>
    </BottomSheetHeader>
  );
};

export default PreviewHeader;
