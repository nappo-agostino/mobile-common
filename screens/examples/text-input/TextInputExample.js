import React from "react";
import { View, ScrollView } from "react-native";
import TextInput from "./TextInput";
import icons from "../../../assets/images/textInput";
import theme from "../../../styles/theme";

const TextInputExample = () => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [text, setText] = React.useState(null);
  return (
    <View style={{ flex: 1, margin: 10 }}>
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
