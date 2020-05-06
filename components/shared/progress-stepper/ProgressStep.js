import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styled from "styled-components";

import { SvgXml } from "react-native-svg";

const Circle = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background-color: ${({ stepColor }) => stepColor};
  justify-content: center;
  align-items: center;
`;

const ProgressStep = ({ icon, stepColor, lineColor }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <Circle stepColor={stepColor}>
        <SvgXml xml={icon} fill="white" />
      </Circle>
      <View
        style={{
          marginHorizontal: 5,
          flex: 1,
          borderBottomColor: lineColor,
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
};

ProgressStep.propTypes = {
  icon: PropTypes.string.isRequired,
  stepColor: PropTypes.string.isRequired,
  lineColor: PropTypes.string.isRequired,
};

export default ProgressStep;
