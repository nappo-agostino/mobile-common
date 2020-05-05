import React from "react";
import { View, ScrollView } from "react-native";
import { TextInput } from "../../components/shared";
import icons from "../../assets/images/textInput";
import theme from "../../styles/theme";

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
        autoCorrect={false}
        borderWidth={4}
        value={email}
        onChangeText={(value) => {
          setEmail(value);
        }}
      />
      <TextInput
        leftIcon={icons.passwordIcon}
        secureTextEntry
        error="error label"
        contentContainerStyle={{ marginVertical: 20 }}
        textInputContainerStyle={{
          borderWidth: 2,
          borderColor: theme.colors.defaultColor,
        }}
        placeholder="password"
        returnKeyType="next"
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(value) => {
          setPassword(value);
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

      <TextInput
        placeholder="email"
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
        label="with label"
        labelColor="green"
        required
        placeholder="email"
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
    </View>
  );
};

export default TextInputExample;
