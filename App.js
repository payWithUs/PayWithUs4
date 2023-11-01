import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Keyboard } from "react-native";
import { Container, StyledTextInput, StyledButton } from "./src/logIn.style";
import { initializeApp } from 'firebase/app';


// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Nsw1uwW8tNtdxPkJFj4TXNgyXJ8gFec",
  authDomain: "paytry2-c5399.firebaseapp.com",
  projectId: "paytry2-c5399",
  storageBucket: "paytry2-c5399.appspot.com",
  messagingSenderId: "304588176862",
  appId: "1:304588176862:web:7c21d6a3142476f645314f"
};

const app = initializeApp(firebaseConfig);

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here, for example, send the email and password to an API
    console.log("Email:", email);
    console.log("Password:", password);

    // Clear email and password states
    setEmail("");
    setPassword("");

    // Dismiss the keyboard
    Keyboard.dismiss();
  };

  return (
    <>
      <Container>
        <StyledTextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <StyledTextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <StyledButton title="Login" onPress={handleLogin} />
      </Container>
      <StatusBar style="auto" />
    </>
  );
}
