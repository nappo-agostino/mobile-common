import React from "react";
import { View, TextInput, Platform, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import theme from "../styles/theme";

import filtersIcon from "../assets/images/filter";
import { textInputProps, defaultTextInputProps } from "./proptypes";

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SearchBarContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  background-color: white;
  border-width: ${({ borderWidth }) => borderWidth}px;
  border-color: ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  height: ${({ height }) => height}px;
`;

const defaultColor = theme.DEFAULT.primaryColor;
const SearchBar = (props) => {
  const {
    height,
    contentContainerStyle,
    borderRadius,
    borderWidth,
    iconColor,
    placeholder,
    primaryColor,
    style,
    value,
    onChangeText,
    onClear,
    onHandleFilterComponent,
    isIconFiltersPressed,
    activeTintColor,
    borderColor,
    inactiveTintColor,
    onFilterCategoryPress,
    filterCategoryDisabled,
    filterCategoryBackground,
  } = props;
  return (
    <Wrapper style={contentContainerStyle}>
      <SearchBarContainer
        borderColor={borderColor || primaryColor || defaultColor}
        borderWidth={borderWidth}
        borderRadius={borderRadius}
        style={style}
        height={height}
      >
        <View
          style={{ width: 30, justifyContent: "center", alignItems: "center" }}
        >
          <Ionicons
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            size={15}
            color={iconColor}
          />
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            style={{ color: "black" }}
            placeholder={placeholder}
            placeholderTextColor="black"
            onChangeText={onChangeText}
            value={value}
          />
        </View>
        {value !== "" && value !== null && onClear && (
          <TouchableOpacity
            style={{
              width: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={onClear}
          >
            <Ionicons
              name={Platform.OS === "ios" ? "ios-close" : "md-close"}
              color={iconColor}
              size={20}
            />
          </TouchableOpacity>
        )}
        {onFilterCategoryPress && (
          <TouchableOpacity
            disabled={filterCategoryDisabled}
            style={{
              backgroundColor:
                filterCategoryBackground || primaryColor || defaultColor,
              borderTopRightRadius: borderRadius,
              borderBottomRightRadius: borderRadius,
              justifyContent: "center",
              paddingHorizontal: 5,
              height,
            }}
            onPress={onFilterCategoryPress}
          >
            <SvgXml xml={filtersIcon.filterCategoryIcon} fill="white" />
          </TouchableOpacity>
        )}
      </SearchBarContainer>

      {onHandleFilterComponent && (
        <TouchableOpacity onPress={onHandleFilterComponent}>
          <SvgXml
            width={20}
            height={20}
            xml={filtersIcon.filterIcon}
            fill={isIconFiltersPressed ? activeTintColor : inactiveTintColor}
            style={{ marginLeft: 5 }}
          />
        </TouchableOpacity>
      )}
    </Wrapper>
  );
};

SearchBar.propTypes = {
  ...textInputProps,
  onHandleFilterComponent: PropTypes.func,
  onFilterCategoryPress: PropTypes.func,
  filterCategoryDisabled: PropTypes.bool,
  filterCategoryBackground: PropTypes.string,
  height: PropTypes.number,
  primaryColor: PropTypes.string,
};

SearchBar.defaultProps = {
  ...defaultTextInputProps,
  borderRadius: 4,
  borderWidth: 1,
  borderColor: null,
  placeholder: "search here...",
  onHandleFilterComponent: null,
  onFilterCategoryPress: null,
  filterCategoryDisabled: false,
  filterCategoryBackground: null,
  height: 35,
  primaryColor: null,
};

export default SearchBar;
