import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import { TabBarIcon } from "../components/shared";

import arrows from "../assets/images/arrows";
import HomeStack from "./stacks/HomeStack";
import Header from "../components/shared/Header";
import {
  TextInputStack,
  SearchBarStack,
  CheckBoxAndRadioStack,
  DropdownAlertStack,
  ParallaxStack,
  StepperCounterStack,
  RowStack,
  DropdownStack,
  ImageCardStack,
  ProgressStepperStack,
  OrderCardStack,
  TabViewStack,
} from "./stacks";

const Drawer = createDrawerNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function DrawerNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  // navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { margin: 0 },
      }}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="TextInputStack" component={TextInputStack} />
      <Drawer.Screen name="SearchBarStack" component={SearchBarStack} />
      <Drawer.Screen
        name="CheckBoxAndRadioStack"
        component={CheckBoxAndRadioStack}
      />
      <Drawer.Screen name="DropdownAlertStack" component={DropdownAlertStack} />
      <Drawer.Screen name="ParallaxStack" component={ParallaxStack} />
      <Drawer.Screen
        name="StepperCounterStack"
        component={StepperCounterStack}
      />
      <Drawer.Screen name="RowStack" component={RowStack} />
      <Drawer.Screen name="DropdownStack" component={DropdownStack} />
      <Drawer.Screen name="ImageCardStack" component={ImageCardStack} />
      <Drawer.Screen
        name="ProgressStepperStack"
        component={ProgressStepperStack}
      />
      <Drawer.Screen name="OrderCardStack" component={OrderCardStack} />
      <Drawer.Screen name="TabViewStack" component={TabViewStack} />
    </Drawer.Navigator>
  );
}
