import React from "react";
import { View, Button } from "react-native";

function PageScreen2(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "#f1c40f" }}>
      <Button
        title="Go to page 1"
        onPress={() => props.navigation.navigate("Page1")}
      />
    </View>
  );
}

export default PageScreen2;
