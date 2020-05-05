import React from "react";
import ModalDropdown from "react-native-modal-dropdown";
import { Platform, View, Text } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import StyledText from "../StyledText";

import icons from "../../../assets/images/controlCenter";
import guestDetailsIcons from "../../../assets/images/customDropdown";
import theme from "../../../styles/theme";

const ImageContainer = styled(LinearGradient)`
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
`;
const Dropdown = ({
  disabled,
  children,
  type,
  icon,
  value,
  onSelect,
  optionsCount,
  options,
  height = 40,
  width = 130,
  containerStyle,
  borderRadius = 4,
  primaryColor,
  gradientColors,
  dropdownBorderColor,
  dropdownStyle,
  renderRow,
  dropdownRef,
  onDropdownWillShow,
  onDropdownWillHide,
}) => {
  const renderContainedDropdown = () => {
    return (
      <ModalDropdown
        showsVerticalScrollIndicator={false}
        options={options}
        onSelect={onSelect}
        dropdownStyle={{
          height: 40 * optionsCount + 3,
          width,
          borderRadius,
          backgroundColor: "white",
          marginTop: Platform.OS === "android" ? -30 : 5,
          borderWidth: 1,
          borderColor: dropdownBorderColor,
          ...dropdownStyle,
        }}
        renderSeparator={() => null}
        style={{ borderWidth: 0 }}
        renderRow={(option, index, isSelected) => {
          return (
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  height: 40,
                  backgroundColor: "white",
                  borderBottomWidth: 1,
                  borderColor: theme.colors.borderColor,
                },

                Number(index) === 0 && {
                  borderTopRightRadius: borderRadius + 2,
                  borderTopLeftRadius: borderRadius + 2,
                },

                Number(index) === optionsCount - 1 && {
                  borderBottomWidth: 0,
                  borderBottomRightRadius: borderRadius + 2,
                  borderBottomLeftRadius: borderRadius + 2,
                },
              ]}
              onDropdownWillShow={onDropdownWillShow}
              onDropdownWillHide={onDropdownWillHide}
            >
              <StyledText
                color={option.rowColor}
                fontFamily="roboto-bold"
                style={{ textTransform: "capitalize" }}
              >
                {option.option}
              </StyledText>
            </View>
          );
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: primaryColor,
            height,
            width,
            paddingHorizontal: 10,
            borderRadius,
            ...containerStyle,
          }}
        >
          <SvgXml width={20} height={20} fill="white" xml={icon} />
          <Text
            style={{
              flex: 1,
              paddingLeft: 5,
              textTransform: "uppercase",
              color: "white",
              fontFamily: "roboto-bold",
              fontSize: 11,
              textAlign: "left",
            }}
          >
            {value || ""}
          </Text>

          <FontAwesome name="caret-down" color="white" />
        </View>
      </ModalDropdown>
    );
  };

  const renderUserDropdown = () => {
    return (
      <ModalDropdown
        showsVerticalScrollIndicator={false}
        options={options}
        onSelect={onSelect}
        dropdownStyle={{
          height: 44 * optionsCount,
          width: 160,
          borderRadius,
          backgroundColor: "transparent",
          borderWidth: 0,
          marginTop: Platform.OS === "android" ? -30 : 0,
        }}
        // dropdownTextHighlightStyle={{ borderRadius: 20 }}
        renderSeparator={() => null}
        style={{ borderWidth: 0 }}
        renderRow={(option, index, isSelected) => {
          return (
            <LinearGradient
              colors={option.rowColor}
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  height: 44,
                },
                Number(index) === 0 && {
                  borderTopRightRadius: borderRadius,
                  borderTopLeftRadius: borderRadius,
                },

                Number(index) === optionsCount - 1 && {
                  borderBottomRightRadius: borderRadius,
                  borderBottomLeftRadius: borderRadius,
                },
              ]}
              onDropdownWillShow={onDropdownWillShow}
              onDropdownWillHide={onDropdownWillHide}
            >
              <SvgXml
                width={14}
                height={14}
                fill="white"
                xml={icons.userIcon}
                style={{ marginRight: 10 }}
              />
              <StyledText
                color="white"
                fontFamily="roboto-bold"
                style={{ textTransform: "capitalize" }}
              >
                {option.option}
              </StyledText>
            </LinearGradient>
          );
        }}
      >
        <View
          style={{
            borderRadius: 50,
            overflow: "hidden",
          }}
        >
          <ImageContainer colors={gradientColors}>
            <SvgXml
              width={22}
              height={22}
              fill="white"
              xml={icons.userStatusAdd}
            />
          </ImageContainer>
        </View>
      </ModalDropdown>
    );
  };

  const renderGuestDetailsDropdown = () => {
    return (
      <ModalDropdown
        disabled={disabled}
        showsVerticalScrollIndicator={false}
        options={options}
        onSelect={onSelect}
        dropdownStyle={{
          height: 40 * optionsCount + 3,
          width: 200,
          borderRadius,
          backgroundColor: "transparent",
          borderWidth: 0,
          marginTop: Platform.OS === "android" ? -30 : 0,
          ...dropdownStyle,
        }}
        dropdownTextHighlightStyle={{ borderRadius: 20 }}
        renderSeparator={() => null}
        style={{ borderWidth: 0 }}
        onDropdownWillShow={onDropdownWillShow}
        onDropdownWillHide={onDropdownWillHide}
        renderRow={(option, index, isSelected) => {
          return (
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  height: 40,
                  backgroundColor: option.rowColor,
                  borderBottomWidth: 1,
                  borderColor: "white",
                },
                Number(index) === 0 && {
                  borderTopRightRadius: borderRadius,
                  borderTopLeftRadius: borderRadius,
                },

                Number(index) === optionsCount - 1 && {
                  borderBottomRightRadius: borderRadius,
                  borderBottomLeftRadius: borderRadius,
                  borderBottomWidth: 0,
                },
              ]}
            >
              <SvgXml
                width={14}
                height={14}
                fill="white"
                xml={guestDetailsIcons[option.icon] || null}
                style={{ marginRight: 10 }}
              />
              <StyledText
                color="white"
                fontFamily="roboto-bold"
                style={{ textTransform: "capitalize" }}
              >
                {option.option}
              </StyledText>
            </View>
          );
        }}
      >
        {children}
      </ModalDropdown>
    );
  };

  const shareDropDown = () => {
    return (
      <ModalDropdown
        ref={dropdownRef}
        showsVerticalScrollIndicator={false}
        options={options}
        onSelect={onSelect}
        dropdownStyle={{
          height: 40 * optionsCount,
          width: 160,
          borderRadius,
          backgroundColor: "transparent",
          borderWidth: 0,
          marginTop: Platform.OS === "android" ? -30 : 0,
        }}
        // dropdownTextHighlightStyle={{ borderRadius: 20 }}
        renderSeparator={() => null}
        style={{ borderWidth: 0 }}
        renderRow={renderRow}
        onDropdownWillShow={onDropdownWillShow}
        onDropdownWillHide={onDropdownWillHide}
      >
        {children}
      </ModalDropdown>
    );
  };

  const renderComplaintCenterDropdown = () => {
    return (
      <ModalDropdown
        showsVerticalScrollIndicator={false}
        options={options}
        onSelect={onSelect}
        dropdownStyle={{
          height: 40 * optionsCount + 3,
          width: 150,
          borderRadius,
          backgroundColor: "transparent",
          borderWidth: 0,
          marginTop: Platform.OS === "android" ? -20 : 0,
          ...dropdownStyle,
        }}
        dropdownTextHighlightStyle={{ borderRadius: 20 }}
        renderSeparator={() => null}
        style={{ borderWidth: 0 }}
        onDropdownWillShow={onDropdownWillShow}
        onDropdownWillHide={onDropdownWillHide}
        renderRow={(option, index, isSelected) => {
          return (
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  height: 40,
                  backgroundColor: theme.colors.primaryColor,
                  borderBottomWidth: 1,
                  borderColor: "white",
                },
                Number(index) === 0 && {
                  borderTopRightRadius: borderRadius,
                  borderTopLeftRadius: borderRadius,
                },

                Number(index) === optionsCount - 1 && {
                  borderBottomRightRadius: borderRadius,
                  borderBottomLeftRadius: borderRadius,
                  borderBottomWidth: 0,
                },
              ]}
            >
              <SvgXml
                width={14}
                height={14}
                fill="white"
                xml={option.icon || null}
                style={{ marginRight: 10 }}
              />
              <StyledText
                color="white"
                fontFamily="roboto-bold"
                style={{ textTransform: "capitalize" }}
              >
                {option.label}
              </StyledText>
            </View>
          );
        }}
      >
        {children}
      </ModalDropdown>
    );
  };

  switch (type) {
    case "user":
      return renderUserDropdown();
    case "contained":
      return renderContainedDropdown();
    case "guestDetails":
      return renderGuestDetailsDropdown();
    case "complaintCenter":
      return renderComplaintCenterDropdown();
    default:
      return shareDropDown();
  }
};

export default Dropdown;
