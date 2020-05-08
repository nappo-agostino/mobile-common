import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../../components/Header";
import { ImageCardExample } from "../../screens/examples";

const Stack = createStackNavigator();

const ImageCardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="ImageCard" component={ImageCardExample} />
    </Stack.Navigator>
  );
};

export default ImageCardStack;
