import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar, Button, Input, Ico } from "@rneui/themed";

const list = [
  {
    message: "Parfait et toi?",
    name: "Alex",
  },
  {
    message: "Wassup my man?",
    name: "Joey",
  },
];

function ChatScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#eee" }}>
      <View
        style={{
          marginTop: 30,
          marginBottom: 0,
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <View>
          {list.map((el, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{el.message}</ListItem.Title>
                <ListItem.Subtitle>{el.name}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
        <View>
          <Input
            containerStyle={
              {
                //   width: 200,
                //   marginHorizontal: 50,
                //   marginVertical: 10,
                //   color: "rgba(78, 116, 289, 1)",
              }
            }
            inputStyle={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              color: "#999",
              //   marginRight: 40,
            }}
            placeholder="Your message"
            leftIcon={{
              //   type: "font-awesome",
              //   name: "user",
              //   color: "#eb4d4b",
              marginRight: 20,
            }}
            onChangeText={(value) => this.setState({ comment: value })}
          />
          <Button
            title="Login"
            icon={{
              name: "envelope",
              type: "font-awesome",
              size: 15,
              color: "#fff",
            }}
            iconContainerStyle={{ marginRight: 18 }}
            buttonStyle={{
              backgroundColor: "#eb4d4b",
              borderRadius: 3,
            }}
            containerStyle={
              {
                // width: 200,
                //   marginHorizontal: 50,
                //   marginVertical: 10,
              }
            }
            onPress={() => props.navigation.navigate("Main")}
          />
        </View>
      </View>
    </View>
  );
}

export default ChatScreen;
