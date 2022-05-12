import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/HomeScreen";
import Main from "./main";

import myImages from "./reducers/images";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

const store = createStore(combineReducers({ myImages }));

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
