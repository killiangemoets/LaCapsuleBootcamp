import React from "react";
import { View, Button } from "react-native";

function PageScreen(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "#2ecc71" }}>
      <Button
        title="Go home"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
}

export default PageScreen;
