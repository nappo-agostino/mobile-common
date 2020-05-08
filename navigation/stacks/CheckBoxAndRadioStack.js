import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../../components/Header";
import { CheckBoxAndRadioExample } from "../../screens/examples";

const Stack = createStackNavigator();

const CheckBoxAndRadioStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen
        name="CheckBoxAndRadio"
        component={CheckBoxAndRadioExample}
      />
    </Stack.Navigator>
  );
};

export default CheckBoxAndRadioStack;
