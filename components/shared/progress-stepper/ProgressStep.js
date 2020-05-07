import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import styled from "styled-components";

import { SvgXml } from "react-native-svg";
import checkIcon from "../../../assets/images/check.svg";
import StyledText from "../StyledText";
import { stepPropTypes, textProps } from "../proptypes";

const Step = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const Circle = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background-color: ${({ stepColor }) => stepColor};
  justify-content: center;
  align-items: center;
`;

const ProgressStep = ({
  currentStep,
  activeStep,
  stepStyle,
  labelStyle,
  onStepPress,
}) => {
  const [width, setWidth] = useState(0);

  const getStepContent = () => {
    if (
      activeStep.key === currentStep.key ||
      (activeStep.key !== currentStep.key && currentStep.status !== "completed")
    ) {
      return (
        <StyledText color="white" capitalize style={stepStyle}>
          {currentStep.stepValue}
        </StyledText>
      );
    }
    return <SvgXml xml={currentStep.completedIcon || checkIcon} fill="white" />;
  };
  return (
    <Step
      onLayout={(layout) => setWidth(layout.nativeEvent.layout.width)}
      width={width}
      onPress={onStepPress}
    >
      <Circle stepColor={currentStep.stepColor}>
        {getStepContent()}
        {/* {activeStep.key === currentStep.key && (
          <StyledText color="white" capitalize style={stepStyle}>
            {currentStep.stepValue}
          </StyledText>
        )}
        {currentStep.status === "completed" ? (
          <SvgXml xml={currentStep.completedIcon || checkIcon} fill="white" />
        ) : (
          <StyledText color="white" capitalize style={stepStyle}>
            {currentStep.stepValue}
          </StyledText>
        )} */}
      </Circle>
      {currentStep.label && (
        <StyledText style={{ paddingLeft: 5, ...labelStyle }}>
          {currentStep.label}
        </StyledText>
      )}
    </Step>
  );
};

ProgressStep.propTypes = {
  activeStep: PropTypes.shape(stepPropTypes),
  currentStep: PropTypes.shape({
    stepColor: PropTypes.string.isRequired,
    completedIcon: PropTypes.string,
    lineColor: PropTypes.string,
    ...stepPropTypes,
  }).isRequired,
  stepStyle: PropTypes.shape(textProps),
  labelStyle: PropTypes.shape(textProps),
};

ProgressStep.defaultProps = {
  activeStep: null,
  stepStyle: null,
  labelStyle: null,
};
export default ProgressStep;
