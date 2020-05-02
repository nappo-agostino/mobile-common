import React, { useContext } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

import { SvgXml } from "react-native-svg";
import StyledText from "../StyledText";

import { translate, capitalizeFirstLetter } from "../../../translator";
import { LanguageContext } from "../../../contexts/LanguageContext";

const WidgetButton = styled.TouchableOpacity`
  border-radius: 10px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.secondaryColor};
  background-color: white;
`;

const HeaderContainer = styled.View`
  flex: 1;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  padding: 5px;
  flex-direction: row;
  align-items: center;
`;

const HeaderText = styled(StyledText)`
  color: white;
  font-family: "roboto-bold";
  text-transform: uppercase;
`;

const HomeWidget = ({ title, rows, totalCount, icon, onPress }) => {
  const languageContext = useContext(LanguageContext);

  return (
    <WidgetButton onPress={onPress}>
      <HeaderContainer>
        {icon && (
          <SvgXml
            width={18}
            height={18}
            xml={icon}
            fill="white"
            style={{ marginRight: 5 }}
          />
        )}

        <View style={{ flex: 1 }}>
          <HeaderText>
            {capitalizeFirstLetter(translate(title, languageContext.language))}
          </HeaderText>
        </View>
        <View>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {totalCount}
          </Text>
        </View>
      </HeaderContainer>
      <View>
        {rows.map((row, index) => (
          <View
            key={index}
            style={{ padding: 5, flexDirection: "row", alignItems: "center" }}
          >
            {row.icon && (
              <SvgXml
                width={12}
                height={12}
                xml={row.icon}
                fill="#696c6f"
                style={{ marginRight: 5 }}
              />
            )}
            <View style={{ flex: 1 }}>
              <StyledText>
                {capitalizeFirstLetter(
                  translate(row.label, languageContext.language)
                )}
              </StyledText>
            </View>
            <View>
              <StyledText>{row.quantity}</StyledText>
            </View>
          </View>
        ))}
      </View>
    </WidgetButton>
  );
};

export default HomeWidget;
