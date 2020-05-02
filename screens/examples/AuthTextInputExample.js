import React from "react";
import { View, ScrollView } from "react-native";
import { AuthTextInput } from "../../components/shared";
import icons from "../../assets/images/authTextInput";
import theme from "../../styles/theme";

const AuthTextInputExample = () => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [text, setText] = React.useState(null);
  return (
    <View style={{ flex: 1, margin: 10 }}>
      <AuthTextInput
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
      <AuthTextInput
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

      <AuthTextInput
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

export default AuthTextInputExample;
