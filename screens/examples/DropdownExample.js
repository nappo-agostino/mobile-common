import React, { useState } from "react";
import { View } from "react-native";
import { Dropdown } from "../../components/shared";
import theme from "../../styles/theme";

import filterIcon from "../../assets/images/filter-icon.svg";
import { APP_TYPES } from "../../appTypes";

const DropdownExample = () => {
  const [dropdownValue, setDropdownValue] = useState(null);
  const [dropdownColor, setDropdownColor] = useState(theme.colors.primaryColor);
  return (
    <View style={{ flex: 1, margin: 15 }}>
      <Dropdown
        placeHolder="choose color"
        options={dropdownValues}
        onSelect={(index, value) => {
          setDropdownValue(value);
          setDropdownColor(value.rowColor);
        }}
        color={dropdownColor}
        value={dropdownValue?.value}
        appType={APP_TYPES.APP_LOCAL}
      />
      <Dropdown
        placeHolder="choose color"
        options={dropdownValues}
        onSelect={(index, value) => {
          setDropdownValue(value);
          setDropdownColor(value.rowColor);
        }}
        color={dropdownColor}
        value={dropdownValue?.value}
      />

      <Dropdown
        wrapperStyle={{ marginTop: 15 }}
        contained
        placeHolder="choose color"
        options={dropdownValues}
        onSelect={(index, value) => {
          setDropdownValue(value);
          setDropdownColor(value.rowColor);
        }}
        color={dropdownColor}
        value={dropdownValue?.value}
        leftIcon={dropdownValue?.leftIcon}
      />

      <Dropdown
        wrapperStyle={{ marginTop: 15 }}
        contained
        placeHolder="choose color"
        options={dropdownValues}
        onSelect={(index, value) => {
          setDropdownValue(value);
          setDropdownColor(value.rowColor);
        }}
        value={dropdownValue?.value}
      />
    </View>
  );
};

const dropdownValues = [
  {
    key: "key1",
    value: "red",
    label: "red color",
    rowColor: "red",
    leftIcon: filterIcon,
  },
  {
    key: "key2",
    value: "green",
    label: "green color",
    rowColor: "green",
  },
  {
    key: "key3",
    value: "blue",
    label: "blue color",
    rowColor: "blue",
  },
];

export default DropdownExample;
