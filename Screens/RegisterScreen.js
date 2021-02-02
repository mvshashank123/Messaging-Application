import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Button, Input } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const RegisterScreen = ({ navigation }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const register = () => {};
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create an Account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          value={fullname}
          onChangeText={(text) => setFullname(text)}
          autofocus
          type="text"
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          type="email"
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          type="password"
        />
        <Input
          placeholder="Profile Picture Url"
          value={image}
          onChangeText={(text) => setImage(text)}
          type="text"
        />
      </View>

      <Button raised style={styles.button} title="Register" onPress={register} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {},
  inputContainer: {},
  button: {}
});
