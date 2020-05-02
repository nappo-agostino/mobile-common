import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";

import { StyledText } from "../components/shared";
import { AuthTextInputExample, SearchBarExample } from "./examples";
import theme from "../styles/theme";

const OPTIONS = [
  { value: "AuthTextInput" },
  { value: "SearchBar" },
  { value: "CheckBox & Radio" },
  { value: "Date Picker" },
  { value: "Parallax" },
  { value: "Dropdown" },
  { value: "Modal" },
  { value: "TextInput" },
  { value: "DropdownAlert" },
];

const HomeScreen = () => {
  const [option, setOption] = React.useState({ value: "AuthTextInput" });
  return (
    <View style={{ flex: 1 }}>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={OPTIONS}
          style={{ margin: 10 }}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  borderWidth: 1,
                  padding: 5,
                  backgroundColor:
                    option.value === item.value
                      ? theme.colors.primaryColor
                      : "transparent",
                }}
                onPress={() => {
                  setOption(item);
                }}
              >
                <StyledText fontSize={16}>{item.value}</StyledText>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          justifyContent: "flex-start",
        }}
        keyboardShouldPersistTaps="handled"
      >
        {option.value === "AuthTextInput" && <AuthTextInputExample />}
        {option.value === "SearchBar" && <SearchBarExample />}
        {/* <CustomSearchBar /> */}
      </View>
    </View>
  );
};

export default HomeScreen;
