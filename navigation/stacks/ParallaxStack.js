import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../../components/Header";
import { ParallaxExample } from "../../screens/examples";

const Stack = createStackNavigator();

const ParallaxStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="Parallax" component={ParallaxExample} />
    </Stack.Navigator>
  );
};

export default ParallaxStack;
