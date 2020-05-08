import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../../components/Header";
import { DropdownAlertExample } from "../../screens/examples";

const Stack = createStackNavigator();

const DropdownAlertStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="DropdownAlert" component={DropdownAlertExample} />
    </Stack.Navigator>
  );
};

export default DropdownAlertStack;
