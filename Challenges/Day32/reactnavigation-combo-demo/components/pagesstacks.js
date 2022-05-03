import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { StatusBar } from "expo-status-bar";
import PageScreen from "./pagescreen";
import PageScreen2 from "./pagescreen2";
// import { StyleSheet, Text, View } from "react-native";

const Stack = createStackNavigator();

export default function PageStacks() {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Page1" component={PageScreen} />
      <Stack.Screen name="Page2" component={PageScreen2} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
