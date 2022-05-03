import React from "react";
import { View, Button } from "react-native";

function PageScreen(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "#2ecc71" }}>
      <Button
        title="Go to page 2"
        onPress={() => props.navigation.navigate("Page2")}
      />
    </View>
  );
}

export default PageScreen;
