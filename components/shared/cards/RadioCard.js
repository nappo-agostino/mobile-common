import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { View } from "react-native";
import StyledText from "../StyledText";
import { textProps, defaultTextProps } from "../proptypes";
import theme from "../../../styles/theme";

const Card = styled.TouchableOpacity`
  border-width: ${({ isSelected }) => (isSelected ? 1.5 : 0)}px;
  border-color: ${({ primaryColor }) => primaryColor};
  background-color: ${({ isSelected, secondaryColor }) =>
    isSelected ? secondaryColor : "white"};
  padding: 10px;
  flex-direction: row;
  margin-vertical: 10px;
  align-items: center;
`;

const StyledRadio = styled.View`
  height: 15px;
  width: 15px;
  border-width: ${({ isSelected }) => (isSelected ? 5 : 1)}px;
  border-color: ${({ primaryColor }) => primaryColor};

  border-radius: 50px;
  margin-right: 5px;
`;

const RadioCard = ({
  isSelected,
  primaryColor,
  secondaryColor,
  title,
  line1,
  line2,
  titleStyle,
  lineStyle,
  onPress,
}) => {
  return (
    <Card
      onPress={onPress}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      isSelected={isSelected}
      style={
        !isSelected && {
          backgroundColor: "white",
          elevation: 6,
          shadowColor: "rgba(0,0,0, .4)",
          shadowOffset: { height: 2, width: 0.5 },
          shadowOpacity: 5,
          shadowRadius: 4,
        }
      }
    >
      <StyledRadio isSelected={isSelected} primaryColor={primaryColor} />
      <View style={{ flex: 1, justifyContent: "center", marginLeft: 10 }}>
        <StyledText capitalize style={{ paddingBottom: 5, ...titleStyle }}>
          {title}
        </StyledText>
        <StyledText style={lineStyle}>{line1}</StyledText>
        <StyledText style={lineStyle}>{line2}</StyledText>
      </View>
    </Card>
  );
};

RadioCard.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  line1: PropTypes.string.isRequired,
  line2: PropTypes.string,
  titleStyle: PropTypes.shape(textProps),
  lineStyle: PropTypes.shape(textProps),
};

RadioCard.defaultProps = {
  primaryColor: theme.DEFAULT.primaryColor,
  secondaryColor: theme.DEFAULT.secondaryColor,
  titleStyle: { ...defaultTextProps, fontFamily: "roboto-bold" },
  lineStyle: defaultTextProps,
  line2: null,
};

export default RadioCard;
