import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../../components/shared/Header";
import { DropdownExample } from "../../screens/examples";

const Stack = createStackNavigator();

const DropdownStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="Dropdown" component={DropdownExample} />
    </Stack.Navigator>
  );
};

export default DropdownStack;
