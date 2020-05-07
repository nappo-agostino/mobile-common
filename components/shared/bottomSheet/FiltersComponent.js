import React from "react";
import { View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import BottomSheet from "./BottomSheet";
import StyledText from "../StyledText";
import { textProps, defaultTextProps } from "../proptypes";
import filterIcon from "../../../assets/images/filter/filter-icon.svg";

const FiltersComponent = (props) => {
  const {
    bottomSheetRef,
    fontFamily,
    fontSize,
    color = "red",
    underline,
    textStyle,
    children,
    leftAction,
    rightAction,
    leftText,
    middleText,
    rightText,
  } = props;
  return (
    <BottomSheet
      bottomSheetRef={bottomSheetRef}
      points={[200, 0]}
      initialSnap={1}
      onCloseEnd={leftAction}
    >
      <Wrapper>
        <Header color={color}>
          <View>
            <TouchableOpacity onPress={leftAction}>
              <StyledText
                fontFamily={fontFamily}
                fontSize={fontSize}
                color={color}
                style={[
                  {
                    textTransform: "capitalize",
                    ...textStyle,
                  },
                  underline && { textDecorationLine: "underline" },
                ]}
              >
                {leftText}
              </StyledText>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <SvgXml xml={filterIcon} fill={color} />
            <StyledText
              fontFamily={fontFamily}
              color={color}
              capitalize
              style={{
                paddingLeft: 8,
                textTransform: "capitalize",
                ...textStyle,
              }}
              fontSize={fontSize + 2}
            >
              {middleText}
            </StyledText>
          </View>
          <View>
            <TouchableOpacity onPress={rightAction}>
              <StyledText
                fontFamily={fontFamily}
                fontSize={fontSize}
                color={color}
                style={[
                  {
                    textTransform: "capitalize",
                    ...textStyle,
                  },
                  underline && { textDecorationLine: "underline" },
                ]}
              >
                {rightText}
              </StyledText>
            </TouchableOpacity>
          </View>
        </Header>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            justifyContent: "space-between",
          }}
        >
          {children}
        </View>
      </Wrapper>
    </BottomSheet>
  );
};

export default FiltersComponent;

FiltersComponent.propTypes = {
  bottomSheetRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  textStyle: PropTypes.shape(textProps),
  ...textProps,
  underline: PropTypes.bool,
  leftAction: PropTypes.func.isRequired,
  rightAction: PropTypes.func.isRequired,
  leftText: PropTypes.string,
  middleText: PropTypes.string,
  rightText: PropTypes.string,
};

FiltersComponent.defaultProps = {
  textStyle: null,
  ...defaultTextProps,
  underline: false,
  leftAction: null,
  rightAction: null,
  leftText: "cancel",
  middleText: "filters",
  rightText: "clear",
};

const Wrapper = styled.View`
  height: 100%;
  padding-horizontal: 20px;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 100px;
  border-color: #d5d5d5;
  border-width: 1px;
  border-bottom-width: 0px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  align-items: center;
  border-bottom-color: ${({ color }) => color};
  border-bottom-width: 1px;
  padding-bottom: 10px;
  width: 100%;
`;
