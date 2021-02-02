import React, {useState} from "react";
import { StyleSheet, View, Text, KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {

  }
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <StatusBar style="light" />
      <Image source={{
            uri: "https://www.technobezz.com/files/uploads/2020/05/Signal_ultramarine_icon.png"
        }}/>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register" />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer:{
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
});
