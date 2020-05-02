import React, { Component } from "react";
import {
  Text,
  FlatList,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
  Platform
} from "react-native";
import { pick } from "lodash/";
import { Ionicons } from "@expo/vector-icons";

const defaultItemValue = {
  name: "",
  id: 0
};

export default class SearchableDropDown extends Component {
  constructor(props) {
    super(props);
    this.renderTextInput = this.renderTextInput.bind(this);
    this.renderFlatList = this.renderFlatList.bind(this);
    this.searchedItems = this.searchedItems.bind(this);
    this.renderItems = this.renderItems.bind(this);

    this.state = {
      item: {},
      listItems: [],
      focus: false
    };
  }

  renderFlatList = () => {
    if (this.state.focus) {
      const flatListProps = { ...this.props.listProps };
      const oldSupport = [
        { key: "keyboardShouldPersistTaps", val: "always" },
        { key: "nestedScrollEnabled", val: false },
        { key: "style", val: { ...this.props.itemsContainerStyle } },
        { key: "data", val: this.state.listItems },
        { key: "keyExtractor", val: (item, index) => index.toString() },
        {
          key: "renderItem",
          val: ({ item, index }) => this.renderItems(item, index)
        },
        { key: "showsVerticalScrollIndicator", val: false }
      ];
      oldSupport.forEach(kv => {
        if (!Object.keys(flatListProps).includes(kv.key)) {
          flatListProps[kv.key] = kv.val;
        }
        if (kv.key === "style") {
          flatListProps.style = kv.val;
        }
      });
      return <FlatList {...flatListProps} />;
    }
  };

  componentDidMount = () => {
    const listItems = this.props.items;
    const { defaultIndex } = this.props;
    if (defaultIndex && listItems.length > defaultIndex) {
      this.setState({
        listItems,
        item: listItems[defaultIndex]
      });
    } else {
      this.setState({ listItems });
    }
  };

  searchedItems = searchedText => {
    const filteredItems = [];
    this.props.items.map(item => {
      const subset = pick(item, this.props.keysToRender);

      const values = Object.values(subset);
      let found = false;
      for (let i = 0; i < values.length; i++) {
        // if (!values[i]) break;
        if (values[i].toLowerCase().indexOf(searchedText.toLowerCase()) > -1) {
          found = true;
          break;
        }
      }
      if (found) filteredItems.push(subset);
    });

    const item = {
      id: -1,
      name: searchedText
    };
    this.setState({ listItems: filteredItems, item });
    const onTextChange =
      this.props.onTextChange ||
      this.props.textInputProps.onTextChange ||
      this.props.onChangeText ||
      this.props.textInputProps.onChangeText;
    if (onTextChange && typeof onTextChange === "function") {
      setTimeout(() => {
        onTextChange(searchedText);
      }, 0);
    }
  };

  renderItems = (item, index) => {
    if (
      this.props.multi &&
      this.props.selectedItems &&
      this.props.selectedItems.length > 0
    ) {
      return this.props.selectedItems.find(sitem => sitem.id === item.id) ? (
        <TouchableOpacity
          style={{ ...this.props.itemStyle, flex: 1, flexDirection: "row" }}
        >
          <View
            style={{
              flex: 0.9,
              flexDirection: "row",
              alignItems: "flex-start"
            }}
          >
            <Text>{this.props.keysToRender.map(key => item[key])}</Text>
            {/* <Text>{item[this.props.keysToRender]}</Text> */}
          </View>
          <View
            style={{ flex: 0.1, flexDirection: "row", alignItems: "flex-end" }}
          >
            <TouchableOpacity
              onPress={() =>
                setTimeout(() => {
                  this.props.onRemoveItem(item, index);
                }, 0)
              }
              style={{
                backgroundColor: "pink",
                alignItems: "center",
                justifyContent: "center",
                width: 25,
                height: 25,
                borderRadius: 100,
                marginLeft: 10
              }}
            >
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            this.setState({ item });
            setTimeout(() => {
              this.props.onItemSelect(item);
            }, 0);
          }}
          style={{ ...this.props.itemStyle, flex: 1, flexDirection: "row" }}
        >
          <View
            style={{ flex: 1, flexDirection: "row", alignItems: "flex-start" }}
          >
            <Text>{this.props.keysToRender.map(key => item[key])}</Text>
            {/* <Text>{item[this.props.keysToRender]}</Text> */}
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={{ ...this.props.itemStyle }}
        onPress={() => {
          this.setState({ item, focus: false });
          Keyboard.dismiss();
          setTimeout(() => {
            this.props.onItemSelect(item);
            if (this.props.resetValue) {
              this.setState({ focus: true, item: defaultItemValue });
              this.input.focus();
            }
          }, 0);
        }}
      >
        {this.props.selectedItems &&
        this.props.selectedItems.length > 0 &&
        this.props.selectedItems.find(x => x.id === item.id) ? (
          <Text style={{ ...this.props.itemTextStyle }}>
            <Text>{this.props.keysToRender.map(key => item[key])}</Text>
            {/* {item[this.props.keysToRender]} */}
          </Text>
        ) : (
          <Text style={{ ...this.props.itemTextStyle }}>
            <Text>{this.props.keysToRender.map(key => item[key])}</Text>
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  renderListType = () => {
    return this.renderFlatList();
  };

  renderTextInput = () => {
    const textInputProps = { ...this.props.textInputProps };
    const oldSupport = [
      {
        key: "ref",
        val: e => {
          this.input = e;
        }
      },
      {
        key: "onTextChange",
        val: text => {
          this.searchedItems(text);
        }
      },
      { key: "underlineColorAndroid", val: this.props.underlineColorAndroid },
      {
        key: "onFocus",
        val: () => {
          this.props.onFocus && this.props.onFocus();
          this.setState({
            focus: true,
            item: defaultItemValue,
            listItems: this.props.items
          });
        }
      },
      {
        key: "onBlur",
        val: () => {
          this.props.onBlur && this.props.onBlur();
          this.setState({ focus: false });
        }
      },
      {
        key: "value",
        val: this.state.item.value
        // val: this.state.item[this.props.keysToRender]
      },
      {
        key: "style",
        val: { ...this.props.textInputStyle }
      },
      {
        key: "placeholderTextColor",
        val: this.props.placeholderTextColor
      },
      {
        key: "placeholder",
        val: this.props.placeholder
      }
    ];
    oldSupport.forEach(kv => {
      if (!Object.keys(textInputProps).includes(kv.key)) {
        if (kv.key === "onTextChange" || kv.key === "onChangeText") {
          textInputProps.onChangeText = kv.val;
        } else {
          textInputProps[kv.key] = kv.val;
        }
      }
      if (kv.key === "onTextChange" || kv.key === "onChangeText") {
        textInputProps.onChangeText = kv.val;
      }
    });
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          ...this.props.containerStyle
        }}
      >
        <View
          style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}
        >
          <Ionicons
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            size={15}
            color={this.props.textInputIconColor}
            style={{}}
          />
        </View>
        <View style={{ flex: 0.8 }}>
          <TextInput {...textInputProps} />
        </View>
        {textInputProps.value !== "" && (
          <TouchableOpacity
            style={{
              flex: 0.1,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => textInputProps.onChangeText("")}
          >
            <Ionicons
              name={Platform.OS === "ios" ? "ios-close" : "md-close"}
              color={this.props.textInputIconColor}
              size={20}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  render = () => {
    return (
      <View
        keyboardShouldPersist="always"
        // style={{ ...this.props.containerStyle }}
      >
        {this.renderTextInput()}
        {this.renderListType()}
        {this.renderSelectedItems()}
      </View>
    );
  };

  renderSelectedItems() {
    const items = this.props.selectedItems;
    if (
      items !== undefined &&
      items.length > 0 &&
      this.props.chip &&
      this.props.multi
    ) {
      return (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            paddingBottom: 10,
            marginTop: 5
          }}
        >
          {items.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: item[this.props.keysToRender].length * 8 + 60,
                  justifyContent: "center",
                  flex: 0,
                  backgroundColor: "#eee",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 5,
                  padding: 8,
                  borderRadius: 15
                }}
              >
                <Text style={{ color: "#555" }}>
                  {item[this.props.keysToRender]}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    setTimeout(() => {
                      this.props.onRemoveItem(item, index);
                    }, 0)
                  }
                  style={{
                    backgroundColor: "green",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 25,
                    height: 25,
                    borderRadius: 100,
                    marginLeft: 10
                  }}
                >
                  <Text>X</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      );
    }
  }
}
