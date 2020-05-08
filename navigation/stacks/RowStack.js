import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../../components/Header";
import { RowExample } from "../../screens/examples";

const Stack = createStackNavigator();

const RowStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="Row" component={RowExample} />
    </Stack.Navigator>
  );
};

export default RowStack;
