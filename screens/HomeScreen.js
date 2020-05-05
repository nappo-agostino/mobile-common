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
import {
  TextInputExample,
  SearchBarExample,
  CheckBoxAndRadioExample,
  DropdownAlertExample,
  ParallaxExample,
  RowExample,
  StepperCounterExample,
} from "./examples";
import theme from "../styles/theme";

const OPTIONS = {
  TextInput: { key: "TextInput" },
  SearchBar: { key: "SearchBar" },
  "CB&R": { key: "CheckBox & Radio" },
  DropdownAlert: { key: "DropdownAlert" },
  Parallax: { key: "Parallax" },
  Row: { key: "Row" },
  Stepper: { key: "Stepper" },
  DatePicker: { key: "Date Picker" },
  Dropdown: { key: "Dropdown" },
  Modal: { key: "Modal" },
};

const HomeScreen = () => {
  const [option, setOption] = React.useState(OPTIONS.TextInput.key);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={Object.keys(OPTIONS)}
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
                    option === OPTIONS[item].key
                      ? theme.colors.primaryColor
                      : "transparent",
                }}
                onPress={() => {
                  setOption(OPTIONS[item].key);
                }}
              >
                <StyledText fontSize={16}>{OPTIONS[item].key}</StyledText>
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
        {option === OPTIONS.TextInput.key && <TextInputExample />}
        {option === OPTIONS.SearchBar.key && <SearchBarExample />}
        {option === OPTIONS["CB&R"].key && <CheckBoxAndRadioExample />}
        {option === OPTIONS.DropdownAlert.key && <DropdownAlertExample />}
        {option === OPTIONS.Parallax.key && <ParallaxExample />}
        {option === OPTIONS.Row.key && <RowExample />}
        {option === OPTIONS.Stepper.key && <StepperCounterExample />}
      </View>
    </View>
  );
};

export default HomeScreen;
