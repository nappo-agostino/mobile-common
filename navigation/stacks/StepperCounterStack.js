import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../../components/shared/Header";
import { StepperCounterExample } from "../../screens/examples";

const Stack = createStackNavigator();

const StepperCounterStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="StepperCounter" component={StepperCounterExample} />
    </Stack.Navigator>
  );
};

export default StepperCounterStack;
