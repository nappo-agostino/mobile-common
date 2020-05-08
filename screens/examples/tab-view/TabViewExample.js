import React, { useState } from "react";
import { View } from "react-native";
import FirstRoute from "./routes/FirstRoute";
import SecondRoute from "./routes/SecondRoute";

import TabView from "../../../components/TabView";
import theme from "../../../styles/theme";

const TabViewExample = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);
  const sceneMap = {
    first: FirstRoute,
    second: SecondRoute,
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 15 }}>
      <TabView
        index={index}
        routes={routes}
        sceneMap={sceneMap}
        onChangeIndex={setIndex}
        primaryColor={theme.APP_MOH.primaryColor}
      />
    </View>
  );
};

export default TabViewExample;
