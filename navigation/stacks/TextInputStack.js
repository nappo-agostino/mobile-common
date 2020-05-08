import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../../components/shared/Header";
import { TextInputExample, SearchBarExample } from "../../screens/examples";
import filterIcon from "../../assets/images/filter/filter-icon.svg";

const Stack = createStackNavigator();

const TextInputStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="TextInput" component={TextInputExample} />
      <Stack.Screen name="SearchBar" component={SearchBarExample} />
    </Stack.Navigator>
  );
};

export default TextInputStack;
