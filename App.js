import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDUeoNvt5xxzA1Z3eGiabKutfhF1gtHNYo",
  authDomain: "settle-login-page.firebaseapp.com",
  databaseURL: "https://settle-login-page.firebaseio.com",
  projectId: "settle-login-page",
  storageBucket: "settle-login-page.appspot.com",
 
};

firebase.initializeApp(firebaseConfig);


export default function App() {

const [email,setemail] = useState('');
const [pw,setpw] = useState('');


  function signup(email,pw){
    firebase.auth().createUserWithEmailAndPassword(email, pw).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  


  return (
    <View style={styles.container}>
     <TextInput 
     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
     onChangeText = {(email)=> setemail(email)}
     placeholder = {"USERNAME"}></TextInput>
    <Text>Here is the email {email}</Text>

    <TextInput 
     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
     onChangeText = {(pw)=> setpw(pw)}
     placeholder = {"PW"}></TextInput>
    <Text>Here is the pw {pw}</Text>

    <Button 
        onPress = {()=>signup(email,pw) }
        title = "Sign up"
       />
       

     </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  }});