import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from "react-native";

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUeoNvt5xxzA1Z3eGiabKutfhF1gtHNYo",
  authDomain: "settle-login-page.firebaseapp.com",
  databaseURL: "https://settle-login-page.firebaseio.com",
  projectId: "settle-login-page",
  storageBucket: "settle-login-page.appspot.com",
  messagingSenderId: "306571897576",
  appId: "1:306571897576:web:a607fd1ebeb1456432775d",
  measurementId: "G-FVZ3H3PBC6",
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  const [email, setemail] = useState("");
  const [pw, setpw] = useState("");

  const signup = (email, pw) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pw)
      .then(function (msg) {
        console.log(msg);
        console.log("SIGN UP SUCCESS");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const login = (email, pw) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pw)
      .catch(function (error) {
        console.log(error);
      })
      .then(function (msg) {
        console.log(msg);
        console.log("LOGIN SUCCESS");
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{
            uri: "https://png.icons8.com/message/ultraviolet/50/3498db",
          }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={(email) => setemail(email)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db" }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true} // to hide password
          underlineColorAndroid="transparent"
          onChangeText={(pw) => setpw(pw)}
        />
      </View>

      <TouchableHighlight
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={() => login(email, pw)}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={[styles.buttonContainer, styles.loginButton]}
        //onPress={() => login(email, pw)}        // forget password option which to be filled later
      >
        <Text style={styles.loginText}>Forget Password</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={() => signup(email, pw)}
      >
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: "white",
  },
});
