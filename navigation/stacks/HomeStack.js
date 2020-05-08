import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";
import Header from "../../components/Header";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   header: ({ scene, previous, navigation }) => (
        //     <Header scene={scene} previous={previous} navigation={navigation} />
        //   ),
        // }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
