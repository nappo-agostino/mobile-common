import React, { useCallback, useState } from "react";
import { SvgXml } from "react-native-svg";
import typy from "typy";
import debounce from "lodash/debounce";
import { useQuery } from "@apollo/react-hooks";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Overlay } from "react-native-elements";
import styled from "styled-components/native";
import StyledText from "../StyledText";
import TextInput from "./TextInput";
import { GET_IN_HOUSE_GUESTS } from "../../../graphql/guests/queries";
import checkIcon from "../../../assets/images/check.svg";
import theme from "../../../styles/theme";
import keys from "../../../keys";

const Wrapper = styled(Overlay).attrs(({ isVisible }) => ({
  isVisible,

  containerStyle: {},
  overlayStyle: {
    maxHeight: "80%",
  },
}))``;

const ResultItem = styled.TouchableOpacity`
  padding-vertical: 10px;
`;

const queryFilters = {
  orderType: "ASC",
  orderBy: "reservation.room, guest.firstName",
};
const ModalSearchBar = ({
  timeout = 300,
  isVisible,
  closeModal,
  onResultPress,
  onBackdropPress,
  freeText,
}) => {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [results, setResults] = useState([]);

  const getGuestRes = useQuery(GET_IN_HOUSE_GUESTS, {
    variables: queryFilters,
    // onCompleted: res => console.log("res", res),
    // onError: err => console.log("err", JSON.stringify(err)),
    skip: searchBarValue === "" || searchBarValue === null,
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
  });

  const onChangeText = useCallback(
    debounce((text) => {
      getGuestRes
        .refetch({
          ...queryFilters,
          keyword: text,
        })
        .then((res) => {
          setResults(typy(res, "data.getInHouseGuests.data").safeArray);
        })
        .catch((err) => {
          console.error(JSON.stringify(err));
        });
    }, timeout),
    []
  );

  return (
    <Wrapper
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      onRequestClose={closeModal}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            label="Name or room"
            containerStyle={{ flex: 1 }}
            value={searchBarValue}
            onChangeText={(text) => {
              setSearchBarValue(text);
              onChangeText(text);
            }}
          />
          {freeText && (
            <View style={{ width: 40, marginTop: 20 }}>
              {searchBarValue.length > 0 && (
                <TouchableOpacity
                  style={{ padding: 10 }}
                  onPress={() => {
                    const result = { text: searchBarValue, guestInHouse: null };
                    onResultPress(result);
                  }}
                >
                  <SvgXml xml={checkIcon} fill={theme.colors.green} />
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
        <FlatList
          style={{ paddingHorizontal: 10 }}
          data={results.filter(
            (result) =>
              typy(result, "guest.firstName").safeString !== "" &&
              typy(result, "guest.lastName").safeString !== ""
          )}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          nestedScrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ResultItem
                key={index}
                onPress={() => {
                  const result = { text: null, guestInHouse: item };
                  onResultPress(result);
                }}
              >
                <StyledText fontFamily="roboto-medium" fontSize={16}>
                  {typy(item, "reservation.room.number").safeString} -{" "}
                  {typy(item, "guest.firstName").safeString}{" "}
                  {typy(item, "guest.lastName").safeString}
                </StyledText>
              </ResultItem>
            );
          }}
        />
      </View>
    </Wrapper>
  );
};

export default ModalSearchBar;
