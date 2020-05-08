import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";
import Header from "../../components/Header";
import { SearchBarExample } from "../../screens/examples";

const Stack = createStackNavigator();

const SearchBarStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="SearchBar" component={SearchBarExample} />
    </Stack.Navigator>
  );
};

export default SearchBarStack;
