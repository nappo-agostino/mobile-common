import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../../components/Header";
import { ProgressStepperExample } from "../../screens/examples";

const Stack = createStackNavigator();

const ProgressStepperStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="ProgressStepper" component={ProgressStepperExample} />
    </Stack.Navigator>
  );
};

export default ProgressStepperStack;
