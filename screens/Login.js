import React, { useState } from "react";
import { Image, Button } from "react-native";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    
    console.log("Email:", email);
    console.log("Password:", password);


    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.groupIcon}
        source={require("../assets/group3.png")}
      />
      <Text style={styles.header}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign up with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialIcon}>
          <Image source={require("../assets/google.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Image source={require("../assets/facebook.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: "#DCDCDC",
  },
  header: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "700",
    textTransform: "capitalize",
    marginBottom: 20,
  },
  groupIcon: {
    width:"100%", 
    height: 200, 
    marginBottom: 70,
  },
  inputContainer: {
    width: "100%", 
    marginBottom: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: "regular",
    fontSize: 18,
    width: "100%", 
  },
  buttonContainer: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
    width: "100%", 
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default Login;
