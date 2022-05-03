import React from "react";
import { Button, View } from "react-native";

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "#e67e22" }}>
      <Button
        title="Go page A"
        onPress={() => props.navigation.navigate("PageOk")}
      />
    </View>
  );
}

export default HomeScreen;
