import React, { useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function HomeScreen(props) {
  const [pseudo, setPseudo] = useState("");

  function login(username) {
    props.navigation.navigate("Main");
    props.savePseudo(username);
    console.log(username);
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/home.jpg")}
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input
          onChangeText={(value) => setPseudo(value)}
          value={pseudo}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
            color: "#009788",
          }}
          style={{
            color: "#009788",
          }}
          inputStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            color: "red",
          }}
          placeholder="John"
          leftIcon={{
            type: "font-awesome",
            name: "user",
            color: "#009788",
            marginRight: 10,
          }}
        />
        <Button
          title="Login"
          icon={{
            name: "arrow-right",
            type: "font-awesome",
            size: 15,
            color: "#fff",
          }}
          iconContainerStyle={{ marginRight: 10 }}
          buttonStyle={{
            backgroundColor: "#009788",
            borderRadius: 3,
          }}
          containerStyle={{
            //   width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={() => props.navigation.navigate("Main")}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
