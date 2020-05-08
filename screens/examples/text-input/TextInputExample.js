import React, { useContext } from "react";
import { View, ScrollView } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import TextInput from "./TextInput";
import icons from "../../../assets/images/text-input";
import theme from "../../../styles/theme";
import { Button } from "../../../components/shared";

const TextInputExample = () => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [text, setText] = React.useState(null);

  const navigation = useContext(NavigationContext);
  return (
    <View style={{ flex: 1, margin: 10 }}>
      <Button
        text="button"
        onPress={() =>
          navigation.navigate("TextInputStack", { screen: "SearchBar" })
        }
      />
      <TextInput
        leftIcon={icons.userIcon}
        placeholder="email"
        returnKeyType="next"
        autoCapitalize="none"
        error="error label"
        autoCorrect={false}
        borderWidth={4}
        value={email}
        onChangeText={(value) => {
          setEmail(value);
        }}
        secureTextEntry
        appType="APP_MOH"
      />
      <TextInput
        leftIcon={icons.passwordIcon}
        label="Local App"
        secureTextEntry
        error="error label"
        contentContainerStyle={{ marginVertical: 20 }}
        placeholder="password"
        returnKeyType="next"
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(value) => {
          setPassword(value);
        }}
        appType="APP_LOCAL"
      />

      <TextInput
        label="App Moh"
        required
        placeholder="Moh App"
        returnKeyType="next"
        autoCapitalize="none"
        autoCorrect={false}
        borderWidth={1}
        borderColor="blue"
        value={email}
        onChangeText={(value) => {
          setEmail(value);
        }}
        appType="APP_MOH"
      />

      <TextInput
        label="No App"
        required
        placeholder="no app"
        returnKeyType="next"
        autoCapitalize="none"
        autoCorrect={false}
        borderWidth={1}
        borderColor="blue"
        value={email}
        onChangeText={(value) => {
          setEmail(value);
        }}
      />

      <TextInput
        leftIcon={icons.userIcon}
        withShadow
        placeholder="with shadow"
        returnKeyType="next"
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(value) => {
          setText(value);
        }}
      />
    </View>
  );
};

export default TextInputExample;
