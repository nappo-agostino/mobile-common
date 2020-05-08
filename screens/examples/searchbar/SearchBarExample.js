import React, { useState, useRef, useEffect } from "react";
import { View } from "react-native";
import { SearchBar, StyledText, BottomSheet } from "../../../components/shared";
import { APP_TYPES } from "../../../app.types";
import theme from "../../../styles/theme";
import Button from "./Button";

const SearchBarExample = () => {
  const [keyword, setKeyword] = useState(null);
  const [isIconFiltersPressed, setIsIconFiltersPressed] = useState(false);

  // FILTER COMPONENT
  const bottomSheetRef = useRef(null);

  const onHandleFilterComponent = () => {
    setIsIconFiltersPressed((prevSate) => !prevSate);
  };

  useEffect(() => {
    if (bottomSheetRef?.current) {
      if (isIconFiltersPressed) {
        bottomSheetRef.current.snapTo(0);
      } else {
        bottomSheetRef.current.snapTo(1);
      }
    }
  }, [isIconFiltersPressed]);

  const closeFilterComponent = () => {
    setIsIconFiltersPressed(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ margin: 10 }}>
        <SearchBar
          value={keyword}
          onChangeText={(text) => setKeyword(text)}
          onClear={() => setKeyword(null)}
        />
        <SearchBar
          value={keyword}
          onChangeText={(text) => setKeyword(text)}
          onClear={() => setKeyword(null)}
          contentContainerStyle={{ marginTop: 10 }}
          isIconFiltersPressed={isIconFiltersPressed}
          onHandleFilterComponent={onHandleFilterComponent}
        />
        <SearchBar
          value={keyword}
          onChangeText={(text) => setKeyword(text)}
          onClear={() => setKeyword(null)}
          contentContainerStyle={{ marginTop: 10 }}
          isIconFiltersPressed={isIconFiltersPressed}
          onHandleFilterComponent={onHandleFilterComponent}
        />
        <SearchBar
          value={keyword}
          onChangeText={(text) => setKeyword(text)}
          onClear={() => setKeyword(null)}
          contentContainerStyle={{ marginTop: 10 }}
          borderRadius={4}
          primaryColor={theme.APP_MOH.primaryColor}
          iconColor="green"
          onFilterCategoryPress={onHandleFilterComponent}
        />
        {/* <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Button
            text="adapted size"
            adapt
            containerStyle={{ marginRight: 10 }}
            onPress={onHandleFilterComponent}
            // appType="APP_MOH"
          />

          <Button
            text="inverted"
            adapt
            inverted
            onPress={onHandleFilterComponent}
          />
        </View> */}
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Button
            text="adapted size"
            // adapt
            containerStyle={{ marginRight: 10 }}
            onPress={onHandleFilterComponent}
            // appType="APP_MOH"
            uppercase
          />
          <Button
            text="adapted size"
            // adapt
            inverted
            onPress={onHandleFilterComponent}
            appType="APP_MOH"
          />

          <Button
            text="adapted sizeeeeeeeeeee"
            // adapt
            inverted
            onPress={onHandleFilterComponent}
            appType="APP_MOH"
          />
        </View>
        <Button
          text="adapted size"
          adapt
          inverted
          onPress={onHandleFilterComponent}
          appType="APP_MOH"
        />
      </View>

      <BottomSheet.FiltersComponent
        color="red"
        bottomSheetRef={bottomSheetRef}
        leftAction={closeFilterComponent}
        rightAction={closeFilterComponent}
      >
        <StyledText>asd</StyledText>
      </BottomSheet.FiltersComponent>
    </View>
  );
};
export default SearchBarExample;
