import React, { useState } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import Line from "./Line";
import { style, nodeProps, stepPropTypes } from "../proptypes";
import ProgressStep from "./ProgressStep";

const ProgressSteppers = ({
  activeStep,
  steps,
  activeStepColor,
  completedStepColor,
  incompleteStepColor,
  completedIcon,
  lineColor,
  stepStyle,
  labelStyle,
  children,
  containerStepStyle,
  onStepPress,
}) => {
  if (steps.length > 3) {
    return new Error("max length of step: 3");
  }
  const getStepColor = (step) => {
    if (step.key === activeStep.key) {
      return activeStepColor;
    }
    if (step.status === "completed") {
      return completedStepColor;
    }
    return incompleteStepColor;
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          ...containerStepStyle,
        }}
      >
        {steps.map((step, index) => {
          const currentStep = {
            stepColor: getStepColor(step),
            lineColor,
            completedIcon,
            ...step,
          };

          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ProgressStep
                activeStep={activeStep}
                currentStep={currentStep}
                stepStyle={stepStyle}
                labelStyle={labelStyle}
                onStepPress={() => onStepPress(step, index)}
              />
              {index !== steps.length - 1 && <Line />}
            </View>
          );
        })}
      </View>
      {children}
    </View>
  );
};

ProgressSteppers.propTypes = {
  containerStepStyle: PropTypes.shape(style),
  activeStep: PropTypes.shape(stepPropTypes).isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      ...stepPropTypes,
      stepColor: PropTypes.string,
      completedIcon: PropTypes.string,
      lineColor: PropTypes.string,

      stepStyle: PropTypes.shape({
        fontFamily: PropTypes.string,
        fontSize: PropTypes.number,
        color: PropTypes.string,
      }),
      labelStyle: PropTypes.shape({
        fontFamily: PropTypes.string,
        fontSize: PropTypes.number,
        color: PropTypes.string,
      }),
    })
  ).isRequired,
  stepStyle: PropTypes.shape({
    fontFamily: PropTypes.string,
    fontSize: PropTypes.number,
    color: PropTypes.string,
  }),
  labelStyle: PropTypes.shape({
    fontFamily: PropTypes.string,
    fontSize: PropTypes.number,
    color: PropTypes.string,
  }),
  onStepPress: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([...nodeProps]),
};

ProgressSteppers.defaultProps = {
  containerStepStyle: null,
  stepStyle: null,
  labelStyle: null,
  children: null,
};

export default ProgressSteppers;
