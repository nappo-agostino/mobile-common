import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { TabView as RNTabView, SceneMap, TabBar } from "react-native-tab-view";
import { style } from "./proptypes";
import theme from "../../styles/theme";
import StyledText from "./StyledText";

const initialLayout = { width: Dimensions.get("window").width };

const TabView = ({
  index,
  routes,
  onChangeIndex,
  sceneMap,
  primaryColor,
  secondaryColor,
  labelStyle,
  indicatorStyle,
  tabBarStyle,
}) => {
  const renderScene = SceneMap(sceneMap);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: primaryColor, ...indicatorStyle }}
      style={{ backgroundColor: secondaryColor, ...tabBarStyle }}
      renderLabel={({ route, focused, color }) => (
        <StyledText
          fontFamily="roboto-bold"
          color={primaryColor}
          fontSize={20}
          style={labelStyle}
        >
          {route.title}
        </StyledText>
      )}
    />
  );

  return (
    <RNTabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={onChangeIndex}
      initialLayout={initialLayout}
    />
  );
};

TabView.propTypes = {
  index: PropTypes.number.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({ key: PropTypes.string, title: PropTypes.string })
  ).isRequired,
  onChangeIndex: PropTypes.func.isRequired,
  sceneMap: PropTypes.oneOfType([PropTypes.object]).isRequired,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  indicatorStyle: PropTypes.shape(style),
  tabBarStyle: PropTypes.shape(style),
  labelStyle: PropTypes.shape(style),
};

TabView.defaultProps = {
  primaryColor: theme.DEFAULT.primaryColor,
  secondaryColor: "white",
  indicatorStyle: null,
  tabBarStyle: null,
  labelStyle: null,
};
export default TabView;
