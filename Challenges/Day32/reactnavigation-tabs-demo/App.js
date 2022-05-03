import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { StatusBar } from "expo-status-bar";
import HomeScreen from "./components/homescreen";
import PageScreen from "./components/pagescreen";
import { StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home-outline";
            } else if (route.name === "PageOk") {
              iconName = "ios-options";
            }
            return <Ionicons name={iconName} size={25} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#098988",
          inactiveTintColor: "#dfe6e9",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="PageOk" component={PageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
