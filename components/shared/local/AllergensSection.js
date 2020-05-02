import React, { useState } from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import theme from "../../../styles/theme";
import LabelInput from "./LabelInput";
import TagButton from "./TagButton";

import allergiesIcon from "../../../assets/images/restaurantBooking/allergies.svg";
import intolerancesIcon from "../../../assets/images/restaurantBooking/intolerances.svg";

const Body = styled.View`
  margin-top: -10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-color: ${theme.colors.borderColor};
  border-width: ${({ isCheckin }) => (isCheckin ? 0 : 1)}px;
  border-top-width: 0px;
  flex-direction: column;
  background-color: white;
  padding-horizontal: ${({ isCheckin }) => (isCheckin ? 0 : 17)}px;
  padding-top: 15px;
  padding-bottom: 15px;
  z-index: 1;
`;

const AllergiesIntolerancesContainer = styled.View`
  min-height: 35px;
  border-width: 1px;
  border-color: ${({ isCheckin, color }) =>
    isCheckin ? color : theme.colors.borderColor};
  padding: 5px;
  border-radius: 4px;
  margin-top: 12px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

const ALLERGENS = "allergens";
const INTOLERANCES = "intolerances";

const AllergensSection = ({
  allergensInputText,
  intolerancesInputText,
  onChangeText,
  guest,
  addElement,
  removeElement,
  isCheckin,
  color = { color },
}) => {
  return (
    <Body isCheckin={isCheckin}>
      <LabelInput
        autoCorrect={false}
        label="allergens"
        placeholder="insert-allergen"
        labelFontFamily="roboto-medium"
        containerStyle={{ marginTop: 0 }}
        textInputStyle={{ height: 35 }}
        value={allergensInputText}
        borderColor={color || theme.colors.secondaryColor}
        onChangeText={(text) => onChangeText(ALLERGENS, text)}
        onSubmitEditing={() => addElement(ALLERGENS)}
      />
      <AllergiesIntolerancesContainer isCheckin={isCheckin} color={color}>
        <SvgXml xml={allergiesIcon} style={{ marginTop: 8 }} />
        {guest?.allergens?.map((allergy, index) => (
          <TagButton
            key={index}
            text={allergy}
            onTagPress={() => removeElement(ALLERGENS, index)}
          />
        ))}
      </AllergiesIntolerancesContainer>

      <LabelInput
        autoCorrect={false}
        label="intolerances"
        placeholder="insert-intolerance"
        labelFontFamily="roboto-medium"
        containerStyle={{ marginTop: 0 }}
        textInputStyle={{ height: 35 }}
        value={intolerancesInputText}
        borderColor={color || theme.colors.secondaryColor}
        onChangeText={(text) => onChangeText(INTOLERANCES, text)}
        onSubmitEditing={() => addElement(INTOLERANCES)}
      />
      <AllergiesIntolerancesContainer isCheckin={isCheckin} color={color}>
        <SvgXml xml={intolerancesIcon} style={{ marginTop: 8 }} />
        {guest?.intolerances?.map((intolerance, index) => (
          <TagButton
            key={index}
            text={intolerance}
            onTagPress={() => removeElement(INTOLERANCES, index)}
          />
        ))}
      </AllergiesIntolerancesContainer>
    </Body>
  );
};

export default AllergensSection;
