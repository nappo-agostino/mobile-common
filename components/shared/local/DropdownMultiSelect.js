import React from "react";
import { View } from "react-native";
import MultiSelect from "react-native-multiple-select";

const DropdownMultiSelect = ({
  multiSelectRef,
  items,
  onSelectedItemsChange,
  selectedItems,
  onChangeInput,
  tagRemoveIconColor,
  tagBorderColor,
  tagTextColor,
  selectedItemTextColor,
  selectedItemIconColor,
  itemTextColor,
  hideSubmitButton,
  hideDropdown,
  searchInputStyle,
  submitButtonColor,
  styleTextDropdown,
  selectText,
  searchInputPlaceholderText,
  styleTextDropdownSelected,
  styleListContainer,
  styleInputGroup,
  styleDropdownMenuSubsection,
  displayKey,
  primaryColor,
  submitButtonText,
  borderRadius,
  single
}) => {
  return (
    <>
      <MultiSelect
        hideTags
        items={items}
        uniqueKey="id"
        ref={multiSelectRef}
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText={selectText}
        searchInputPlaceholderText={searchInputPlaceholderText}
        onChangeInput={onChangeInput}
        single={single}
        // altFontFamily="ProximaNova-Light"
        tagRemoveIconColor={primaryColor}
        tagBorderColor={primaryColor}
        tagTextColor={primaryColor}
        selectedItemTextColor={primaryColor}
        selectedItemIconColor={primaryColor}
        itemTextColor={itemTextColor}
        displayKey={displayKey}
        hideSubmitButton={hideSubmitButton}
        hideDropdown={hideDropdown}
        searchInputStyle={searchInputStyle}
        submitButtonColor={primaryColor}
        styleTextDropdown={styleTextDropdown}
        styleTextDropdownSelected={styleTextDropdownSelected}
        styleListContainer={{
          ...styleListContainer,
          borderColor: primaryColor,
          borderBottomLeftRadius: borderRadius || 4,
          borderBottomRightRadius: borderRadius || 4
        }}
        styleInputGroup={{
          ...styleInputGroup,
          borderColor: primaryColor,
          borderTopLeftRadius: borderRadius || 4,
          borderTopRightRadius: borderRadius || 4
        }}
        styleDropdownMenuSubsection={{
          ...styleDropdownMenuSubsection,
          borderColor: primaryColor,
          borderRadius: borderRadius || 4
        }}
        submitButtonText={submitButtonText}
      />

      <View>
        {multiSelectRef &&
          multiSelectRef.current &&
          multiSelectRef.current.getSelectedItemsExt(selectedItems)}
      </View>
    </>
  );
};

export default DropdownMultiSelect;

// DropdownMultiSelect.propTypes = {
//   primaryColor: PropTypes.string.isRequired,
//   items: PropTypes.arrayOf(Object).isRequired,

//   multiSelectRef: PropTypes.instanceOf(Object).isRequired
//   onSelectedItemsChange,
//   selectedItems,
//   tagRemoveIconColor,
//   tagBorderColor,
//   tagTextColor,
//   selectedItemTextColor,
//   selectedItemIconColor,
//   itemTextColor,
//   hideSubmitButton,
//   hideDropdown,
//   searchInputStyle,
//   submitButtonColor,
//   styleTextDropdown,
//   selectText,
//   searchInputPlaceholderText,
//   styleTextDropdownSelected,
//   styleListContainer,
//   styleInputGroup,
//   styleDropdownMenuSubsection,
//   displayKey,
//   primaryColor
//   height: PropTypes.number,
//   itemCount: PropTypes.number,
//   contained: PropTypes.bool,
//   containerStyle: PropTypes.instanceOf(Object),
//   dropdownOffset: PropTypes.instanceOf(Object),
//   onChangeText: PropTypes.func
// };

const primaryColor = "#00B7FF";

DropdownMultiSelect.defaultProps = {
  primaryColor,
  items: [],

  multiSelectRef: {},
  onSelectedItemsChange: () => {},
  selectedItems: [],
  tagRemoveIconColor: primaryColor,
  tagBorderColor: primaryColor,
  tagTextColor: primaryColor,
  selectedItemTextColor: primaryColor,
  selectedItemIconColor: primaryColor,
  itemTextColor: "black",
  hideSubmitButton: true,
  hideDropdown: true,
  searchInputStyle: { color: primaryColor },
  submitButtonColor: primaryColor,
  styleTextDropdown: {
    color: "black",
    paddingHorizontal: 10
  },
  selectText: "Pick Items",
  searchInputPlaceholderText: "Search Items...",
  styleTextDropdownSelected: {
    color: "black",
    paddingHorizontal: 10
  },
  styleListContainer: {
    backgroundColor: "white",
    borderColor: primaryColor,
    borderWidth: 1
  },
  styleInputGroup: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: primaryColor,
    marginTop: 6,
    height: 38
  },
  styleDropdownMenuSubsection: {
    height: 38,
    borderWidth: 1,
    borderColor: primaryColor,
    marginTop: 10,
    paddingHorizontal: 5
  },
  displayKey: "name",
  submitButtonText: "Submit"
};
