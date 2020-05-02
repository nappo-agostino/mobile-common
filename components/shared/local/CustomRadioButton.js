import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import StyledText from "../StyledText";
import theme from "../../../styles/theme";
import { capitalizeFirstLetter, translate } from "../../../translator";
import { LanguageContext } from "../../../contexts/LanguageContext";

const RadioButton = styled.View`
  height: 15px;
  width: 15px;
  border-width: ${(props) => (props.isSelected || props.isDisabled ? 5 : 1)}px;
  border-color: ${({ disabled, error }) => {
    if (disabled) return theme.colors.greyIcon;
    if (error) return theme.colors.red;
    return theme.colors.borderColor;
  }};

  border-radius: 50px;
  margin-right: 5px;
`;

const CustomRadioButton = ({
  disabled,
  error,
  onPress,
  label,
  isSelected,
  children,
}) => {
  const languageContext = useContext(LanguageContext);
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}
      onPress={onPress}
      disabled={disabled}
    >
      <RadioButton
        isSelected={isSelected}
        isDisabled={disabled}
        error={error}
      />
      {label && (
        <StyledText fontFamily="roboto-light">
          {capitalizeFirstLetter(translate(label, languageContext.language))}
        </StyledText>
      )}
      {children}
    </TouchableOpacity>
  );
};

export default CustomRadioButton;
