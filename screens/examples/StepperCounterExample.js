import React, { useState } from "react";
import { View } from "react-native";
import { StepperCounter } from "../../components";
import icon from "../../assets/images/filter/filter-icon.svg";

const StepperCounterExample = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={{ flex: 1, margin: 15 }}>
      <StepperCounter
        value={counter}
        buttonsColor="green"
        onIncreaseCounter={() => setCounter(counter + 1)}
        onDecreaseCounter={() => setCounter(counter - 1)}
      />

      <StepperCounter
        title="stepper"
        titleIcon={icon}
        value={counter}
        buttonsColor="green"
        onIncreaseCounter={() => setCounter(counter + 1)}
        onDecreaseCounter={() => setCounter(counter - 1)}
      />
    </View>
  );
};

export default StepperCounterExample;
