import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Keyboard } from "react-native";
import { Container, StyledTextInput, StyledButton } from "./src/logIn.style";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Nsw1uwW8tNtdxPkJFj4TXNgyXJ8gFec",
  authDomain: "paytry2-c5399.firebaseapp.com",
  projectId: "paytry2-c5399",
  storageBucket: "paytry2-c5399.appspot.com",
  messagingSenderId: "304588176862",
  appId: "1:304588176862:web:7c21d6a3142476f645314f",
};

const app = initializeApp(firebaseConfig);

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);

      // If the user registration is successful, you can redirect the user to another screen or perform other actions.
      console.log("User successfully registered!");

      // Clear email and password states
      setEmail("");
      setPassword("");

      // Dismiss the keyboard
      Keyboard.dismiss();
    } catch (error) {
      // Handle registration errors, such as weak password or existing email address
      console.error("Error registering user: ", error.message);
    }
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
        <StyledButton title="Register" onPress={handleRegister} />
      </Container>
      <StatusBar style="auto" />
    </>
  );
}
