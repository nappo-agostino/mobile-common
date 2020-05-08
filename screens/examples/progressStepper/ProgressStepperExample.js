import React, { useState } from "react";
import { View } from "react-native";
import { ProgressSteppers } from "../../../components";
import theme from "../../../styles/theme";
import checkIcon from "../../../assets/images/check.svg";
import AddressStep from "./steps/AddressStep";

const ProgressSteppersExample = () => {
  const [steps, setSteps] = useState(values);
  const [activeStep, setActiveStep] = useState(values[0]);

  const [state, setState] = useState({ address: null, time: null, card: null });

  const updateSteps = (value, index) => {
    console.log("value", value);
    setActiveStep(value);
    // const updatedSteps = [...steps].map((step) => {
    //   if (step.status !== "completed") {
    //     step.status = "incomplete";
    //   }
    //   return step;
    // });
    // updatedSteps[index].status = "active";
    // setSteps(updatedSteps);
  };

  console.log("state", state);
  const onAddressPress = (address) => {
    setState({ ...state, address });
    const updatedSteps = [...steps].map((step) => {
      if (step.key === "ADDRESS") {
        step.status = "completed";
      }
      return step;
    });

    setSteps(updatedSteps);
  };
  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <ProgressSteppers
        activeStep={activeStep}
        steps={steps}
        activeStepColor={theme.APP_MOH.primaryColor}
        completedStepColor={theme.APP_MOH.primaryColor}
        incompleteStepColor="grey"
        lineColor="#FF6065"
        completedIcon={checkIcon}
        stepStyle={{ fontFamily: "roboto-bold", fontSize: 14, color: "white" }}
        labelStyle={{ fontFamily: "roboto-bold", fontSize: 14, color: "black" }}
        onStepPress={updateSteps}
      >
        {activeStep.key === "ADDRESS" && (
          <AddressStep
            onAddressPress={onAddressPress}
            selectedAddress={state.address}
          />
        )}
      </ProgressSteppers>
    </View>
  );
};

const values = [
  {
    key: "ADDRESS",
    stepValue: 1,
    status: "active",
    label: "address",
  },
  {
    key: "DATE_AND_TIME",
    stepValue: 2,
    status: "incomplete",
    label: "data and time",
  },
  {
    key: "PAYMENT",
    stepValue: 3,
    status: "incomplete",
    label: "payment",
  },
];
export default ProgressSteppersExample;
