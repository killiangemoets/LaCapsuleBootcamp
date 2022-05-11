import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Input,
  Icon,
  Button,
  Card,
  Image,
  Overlay,
} from "react-native-elements";
import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";
import { connect } from "react-redux";

function SnapScreen(props) {
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [visible, setVisible] = useState(false);

  var camera = useRef(null);

  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  async function takePicture() {
    // async () => {
    if (camera) {
      setVisible(true);
      let photo = await camera.takePictureAsync({
        quality: 0.7,
        base64: true,
        exif: true,
      });
      // console.log(photo.uri);
      // console.log(photo.width);
      // console.log(photo.height);
      // console.log(photo.exif);

      const data = new FormData();
      data.append("avatar", {
        uri: photo.uri,
        type: "image/jpeg",
        name: "user_avatar.jpg",
      });

      const rawResponse = await fetch("http://172.20.10.4:3000/upload", {
        method: "POST",
        body: data,
      });
      var response = await rawResponse.json();
      console.log(response);
      props.addImage({
        name: response.original_filename,
        url: response.url,
      });

      setVisible(false);
    }
  }

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  var cameraDisplay;
  if (hasPermission && isFocused) {
    cameraDisplay = (
      <Camera
        style={{ flex: 1 }}
        type={type}
        flashMode={flash}
        ref={(ref) => (camera = ref)}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Icon name="camera-reverse" type="ionicon" color={"#fff"} />
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setFlash(
                flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.on
                  : Camera.Constants.FlashMode.off
              );
            }}
          >
            <Icon
              name={
                flash === Camera.Constants.FlashMode.off ? "flash-off" : "flash"
              }
              type="ionicon"
              color={"#fff"}
            />
            <Text style={styles.text}> Flash </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    );
  } else {
    cameraDisplay = <View style={{ flex: 1 }}></View>;
  }

  return (
    <View style={{ flex: 1 }}>
      {cameraDisplay}
      <Button
        title="Take Picture"
        icon={{
          name: "camera",
          type: "font-awesome",
          size: 15,
          color: "#fff",
        }}
        iconContainerStyle={{
          marginRight: 10,
        }}
        buttonStyle={{
          backgroundColor: "rgba(0,0,0,0)",
          backgroundColor: "#009788",
          height: 50,
          borderRadius: 3,
        }}
        onPress={() => takePicture()}
      />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={styles.modale}>
          <Text>Taking Picture ...</Text>
        </View>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    flex: 1,
    flexDirection: "row",
  },
  button: {
    backgroundColor: "rgba(0,0,0,0)",
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
  icon: {
    color: "#fff",
  },
  modale: {
    padding: 6,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    addImage: function (image) {
      dispatch({ type: "addurl", image });
    },
  };
}

// function mapStateToProps(state) {
//   return { myImages: state.myImages };
// }

// export default ScreenMyArticles;
export default connect(null, mapDispatchToProps)(SnapScreen);
