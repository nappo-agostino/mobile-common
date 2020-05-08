import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../../components/Header";
import { TabViewExample } from "../../screens/examples";

const Stack = createStackNavigator();

const TabViewStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="TabView" component={TabViewExample} />
    </Stack.Navigator>
  );
};

export default TabViewStack;
