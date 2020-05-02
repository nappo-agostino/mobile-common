import React, { useContext } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import StyledText from "../../../StyledText";
import { TranslateTextComponent } from "../../../../../translator";
import theme from "../../../../../styles/theme";

const Row = styled.View`
  width: 100%;
  padding-vertical: 5px;
  flex-direction: row;
`;

const Label = styled(TranslateTextComponent).attrs({ capitalize: true })`
  font-family: roboto-medium;
  color: ${theme.colors.greyIcon};
`;
const ValueText = styled(StyledText)`
  font-family: roboto-light;
  color: #404040;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 1;
`;
const Icon = styled(SvgXml).attrs({
  fill: theme.colors.greyIcon,
  // width: 20,
  height: 10,
})`background-color`;

const WithIconRow = ({ icon, label, value }) => {
  return (
    <Row>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-start",
          alignItems: "center",
        }}
      >
        {icon && (
          <View
            style={{
              width: 16,
              height: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon xml={icon} />
          </View>
        )}
        {label && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
            }}
          >
            <Label>{label}</Label>

            <StyledText
              fontFamily="roboto-medium"
              fontSize={14}
              color="#55595c"
            >
              :
            </StyledText>
          </View>
        )}
      </View>
      <ValueText>
        {/* {capitalizeFirstLetter(translate(value, languageContext.language))} */}
        {value}
      </ValueText>
    </Row>
  );
};

export default WithIconRow;
