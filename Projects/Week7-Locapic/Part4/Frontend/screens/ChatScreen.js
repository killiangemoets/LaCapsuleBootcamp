import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { ListItem, Avatar, Button, Input, Ico } from "@rneui/themed";
import { connect } from "react-redux";

import socketIOClient from "socket.io-client";

var socket = socketIOClient("http://172.20.10.4:3000");

function ChatScreen(props) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [listMessages, setListMessages] = useState([]);

  function addEmojis(message) {
    let updateMessage = message.replaceAll(":)", "\u263A");
    updateMessage = updateMessage.replace(/:\(/g, "\u2639");
    updateMessage = updateMessage.replace(/:p/g, "\uD83D\uDE1B");
    updateMessage = updateMessage.replace(/fuck[a-z]*/gi, "***");
    return updateMessage;
  }
  useEffect(() => {
    socket.on("sendMessageToAll", (newMessage) => {
      console.log(newMessage);
      const messageWithEmojis = addEmojis(newMessage);
      // setListMessages((prev) => [...prev, newMessage]);
      setListMessages([
        ...listMessages,
        { message: messageWithEmojis, pseudo: props.myPseudo },
      ]);
    });
  }, [listMessages]);

  function sendMessage() {
    socket.emit("sendMessage", currentMessage);
    setCurrentMessage("");
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#eee" }}>
      <View
        style={{
          marginTop: 30,
          marginBottom: 0,
          flex: 1,
          justifyContent: "space-between",
          overflow: "scroll",
        }}
      >
        <ScrollView
          style={{
            // marginTop: 30,
            // marginBottom: 0,
            // flex: 1,
            // height: "80%",
            // justifyContent: "space-between",
            overflow: "scroll",
          }}
        >
          {listMessages.map((el, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{el.message}</ListItem.Title>
                <ListItem.Subtitle>{el.pseudo}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
        <KeyboardAvoidingView behavior="padding" enabled>
          <View>
            <Input
              inputStyle={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
              }}
              placeholder="Your message"
              leftIcon={{
                marginRight: 20,
              }}
              onChangeText={(value) => setCurrentMessage(value)}
              value={currentMessage}
            />
            <Button
              title="Send"
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
              onPress={() => sendMessage()}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

function mapStateToProps(state) {
  return { myPseudo: state.pseudo };
}

// export default ScreenMyArticles;
export default connect(mapStateToProps, null)(ChatScreen);

// export default ChatScreen;
