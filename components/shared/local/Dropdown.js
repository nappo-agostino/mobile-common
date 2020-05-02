import React, { useState } from "react";
import styled from "styled-components/native";
import ModalDropdown from "react-native-modal-dropdown";
import { SvgXml } from "react-native-svg";
import { Platform, TouchableOpacity } from "react-native";
import theme from "../../../styles/theme";
import Triangle from "./Triangle";
import { TranslateTextComponent } from "../../../translator";
import StyledText from "../StyledText";
import arrowDown from "../../../assets/images/arrows/arrow-down.svg";

const Wrapper = styled(ModalDropdown).attrs(
  ({ disabled, options, containerWidth, dropdownStyle, color }) => ({
    disabled,
    dropdownStyle: {
      borderColor: color || theme.colors.primaryColor,
      marginTop: Platform.OS === "android" ? -20 : 0,
      width: containerWidth - 30,
      borderWidth: 1.5,
      height: options.length <= 250 / 50 ? options.length * 50 : 250,
      ...dropdownStyle,
    },
    dropdownTextStyle: {
      fontSize: 12,
      textTransform: "capitalize",
      height: 50,
    },
  })
)`
  border-width: 1px;
  border-color: ${({ color, error }) => {
    if (error) return theme.colors.red;
    if (color) return color;
    return theme.colors.primaryColor;
  }};
  flex: 1;
  border-radius: 4px;
  overflow: hidden;
  margin-vertical: 5px;
`;

const Container = styled.View`
  margin-left: 5px;
  min-height: 40px;
  justify-content: center;
`;

const ArrowContainer = styled.View`
  position: absolute;
  right: 0;
  background-color: ${({ color }) => color || theme.colors.primaryColor};
  width: 30px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

const Dropdown = ({
  icon,
  color = theme.colors.primaryColor,
  placeHolder,
  options,
  defaultValue,
  value,
  onSelect,
  disabled,
  wrapperStyle,
  valueStyle,
  dropdownStyle,
  arrowContainerStyle,
  error,
}) => {
  const [containerWidth, setContainerWidth] = useState(0);

  return (
    <Wrapper
      error={error}
      disabled={disabled}
      showsVerticalScrollIndicator={false}
      options={options}
      defaultValue={defaultValue}
      containerWidth={containerWidth}
      dropdownStyle={dropdownStyle}
      color={color}
      style={wrapperStyle}
      renderRow={(option) => (
        // <OptionRowContainer>
        <TouchableOpacity
          style={{
            height: 50,
            justifyContent: "center",
            textTransform: "capitalize",
            marginLeft: 10,
          }}
        >
          <StyledText
            style={{ textTransform: "capitalize" }}
            color={option.rowColor}
          >
            {option.label}
          </StyledText>
        </TouchableOpacity>
        // </OptionRowContainer>
      )}
      onSelect={onSelect}
    >
      <Container
        onLayout={(layout) =>
          setContainerWidth(layout.nativeEvent.layout.width)
        }
      >
        {(!value && (
          <TranslateTextComponent color="#8c8c8c" style={valueStyle} capitalize>
            {placeHolder || "select item"}
          </TranslateTextComponent>
        )) || (
          <StyledText
            style={{
              textTransform: "capitalize",
              ...valueStyle,
            }}
          >
            {value}
          </StyledText>
        )}
        <ArrowContainer color={color} style={arrowContainerStyle}>
          {icon ? (
            <SvgXml xml={icon} fill="white" />
          ) : (
            <SvgXml xml={arrowDown} fill="white" />
            // <Triangle direction="bottom" color="white" size={6} />
          )}
        </ArrowContainer>
      </Container>
    </Wrapper>
  );
};

export default Dropdown;
