import { NavigationContext } from "@react-navigation/native";
import * as React from "react";
import { View } from "react-native";

import { StyledText, Button } from "../components/shared";

const OPTIONS = {
  TextInput: { key: "TextInput", stack: "TextInputStack" },
  SearchBar: { key: "SearchBar", stack: "SearchBarStack" },
  "CB&R": { key: "CheckBox & Radio", stack: "CheckBoxRadioStack" },
  DropdownAlert: { key: "DropdownAlert", stack: "DropdownAlertStack" },
  Parallax: { key: "Parallax", stack: "ParallaxStack" },
  Row: { key: "Row", stack: "RowStack" },
  Stepper: { key: "Stepper", stack: "StepperStack" },
  Dropdown: { key: "Dropdown", stack: "DropdownStack" },
  ImageCard: { key: "ImageCard", stack: "ImageCardStack" },
  ProgressStepper: { key: "ProgressStepper", stack: "ProgressStepperStack" },
  OrderCard: { key: "OrderCard", stack: "OrderCardStack" },
  TabView: { key: "TabView", stack: "TabViewStack" },
  Modal: { key: "Modal" },
  DatePicker: { key: "Date Picker" },
};

const HomeScreen = () => {
  const navigation = React.useContext(NavigationContext);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {Object.keys(OPTIONS).map((key, index) => (
          <Button
            adapt
            key={index}
            text={OPTIONS[key].key}
            onPress={() => navigation.navigate(OPTIONS[key].stack)}
            containerStyle={{ margin: 10 }}
          />
        ))}

        {/* <FlatList
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
        {option === OPTIONS.Dropdown.key && <DropdownExample />}
        {option === OPTIONS.ImageCard.key && <ImageCardExample />}
        {option === OPTIONS.ImageCard.key && <ImageCardExample />}
        {option === OPTIONS.ProgressSteppers.key && <ProgressSteppersExample />}
        {option === OPTIONS.OrderCard.key && <OrderCardExample />}
        {option === OPTIONS.TabView.key && <TabViewExample />} */}
      </View>
    </View>
  );
};

export default HomeScreen;
