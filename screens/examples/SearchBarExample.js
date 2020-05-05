import React, { useState, useRef, useEffect } from "react";
import { View } from "react-native";
import {
  SearchBar,
  StyledText,
  BottomSheet,
  Button,
} from "../../components/shared";
import theme from "../../styles/theme";

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
        <Button
          text="adapted size"
          backgroundColor="green"
          textColor="white"
          adapt
          containerStyle={{ marginTop: 10 }}
          onPress={onHandleFilterComponent}
        />
        <Button
          text="capitalize letters"
          backgroundColor="green"
          textColor="white"
          capitalize
          containerStyle={{ marginTop: 10 }}
          onPress={onHandleFilterComponent}
        />

        <Button
          text="uppercase"
          backgroundColor="green"
          textColor="white"
          uppercase
          containerStyle={{ marginTop: 10 }}
          onPress={onHandleFilterComponent}
        />
        <Button
          containerStyle={{ marginTop: 10 }}
          onPress={onHandleFilterComponent}
        >
          <StyledText>text children</StyledText>
        </Button>
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