import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../../components/Header";
import { OrderCardExample } from "../../screens/examples";

const Stack = createStackNavigator();

const OrderCardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="OrderCard" component={OrderCardExample} />
    </Stack.Navigator>
  );
};

export default OrderCardStack;
