import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
// import MapScreen from "./screens/MapScreen";
import Main from "./main";

import pseudo from "./reducers/pseudo";
import poi from "./reducers/poi";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

const store = createStore(combineReducers({ pseudo, poi }));
//

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Stack.Navigator> */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    // <View style={styles.container}>
    //   <Text>HELLO</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
