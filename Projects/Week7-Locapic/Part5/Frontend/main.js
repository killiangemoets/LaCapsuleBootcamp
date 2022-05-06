import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "./screens/MapScreen";
import ChatScreen from "./screens/ChatScreen";
import ListScreen from "./screens/ListScreen";

const Tab = createBottomTabNavigator();

function Main() {
  return (
    // <View style={{ flex: 1, backgroundColor: "#e67" }}>
    //   <Text>Main</Text>
    // </View>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Map") {
            iconName = "navigate";
          } else if (route.name === "Chat") {
            iconName = "chatbubbles";
          } else if (route.name === "List") {
            iconName = "list";
          }
          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#eb4d4b",
        inactiveTintColor: "#fff",
        style: {
          backgroundColor: "#130f40",
        },
      }}
    >
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
}

export default Main;
