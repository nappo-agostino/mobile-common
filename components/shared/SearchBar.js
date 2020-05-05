import React from "react";
import { View, TextInput, Platform, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import StyledText from "./StyledText";
import theme from "../../styles/theme";

import filterIcon from "../../assets/images/filter-icon.svg";
import {
  textInputProps,
  defaultTextInputProps,
  defaultSearchBarBorderProps,
} from "./proptypes";

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
  height: 35px;
`;

const SearchBar = (props) => {
  const {
    contentContainerStyle,
    borderRadius,
    borderWidth,
    iconColor,
    placeholder,
    style,
    value,
    onChangeText,
    onClear,
    onHandleFilterComponent,
    isIconFiltersPressed,
    activeTintColor,
    borderColor,
    inactiveTintColor,
  } = props;
  return (
    <Wrapper style={contentContainerStyle}>
      <SearchBarContainer
        borderColor={borderColor}
        borderWidth={borderWidth}
        borderRadius={borderRadius}
        style={style}
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
      </SearchBarContainer>

      {onHandleFilterComponent && (
        <TouchableOpacity onPress={onHandleFilterComponent}>
          <SvgXml
            width={20}
            height={20}
            xml={filterIcon}
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
};

SearchBar.defaultProps = {
  ...defaultTextInputProps,
  ...defaultSearchBarBorderProps,
  placeholder: "search here...",
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 5px;
  padding-horizontal: 15px;
`;

const SelectedValueContainer = styled.TouchableOpacity`
  min-height: 35px;
  border-radius: 4px;
  border-width: 1px;
  background-color: white;
  border-color: ${({ theme: { colors } }) => colors.borderColor};
  flex: 1;
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
`;

// export const SearchBar = ({ value, onPress }) => {
//   return (
//     <Container>
//       <SelectedValueContainer onPress={onPress}>
//         <Ionicons
//           name={Platform.OS === "ios" ? "ios-search" : "md-search"}
//           size={15}
//           color={theme.colors.primaryColor}
//         />
//         {(!value && (
//           <StyledText style={{ marginLeft: 5 }} capitalize>
//             client-card-searchbar-placeholder
//           </StyledText>
//         )) || <StyledText style={{ marginLeft: 5 }}>{value}</StyledText>}
//       </SelectedValueContainer>
//     </Container>
//   );
// };
export default SearchBar;
