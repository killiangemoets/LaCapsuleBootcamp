import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Button, Input, Icon } from "@rneui/themed";
import { connect } from "react-redux";

function HomeScreen(props) {
  const [pseudo, setPseudo] = useState("");

  function login(username) {
    props.navigation.navigate("Main");
    props.savePseudo(username);
    console.log(username);
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2ecc71",
        // backgroundImage: "url('../assets/home.jpg')",
      }}
    >
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
            color: "rgba(78, 116, 289, 1)",
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
            color: "#eb4d4b",
            marginRight: 10,
          }}
        />
        <Button
          title="Login"
          icon={{
            name: "arrow-right",
            type: "font-awesome",
            size: 15,
            color: "#eb4d4b",
          }}
          iconContainerStyle={{ marginRight: 10 }}
          buttonStyle={{
            backgroundColor: "rgba(78, 116, 289, 1)",
            borderRadius: 3,
          }}
          containerStyle={{
            //   width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={() => login(pseudo)}
        />
      </ImageBackground>
    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    savePseudo: function (pseudo) {
      dispatch({ type: "savePseudo", pseudo });
    },
  };
}

// function mapStateToProps(state) {
//   return {};
// }

export default connect(null, mapDispatchToProps)(HomeScreen);

// export default HomeScreen;
