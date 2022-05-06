import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { Button } from "@rneui/themed";
import { Overlay, Input } from "react-native-elements";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import socketIOClient from "socket.io-client";

var socket = socketIOClient("http://172.20.10.4:3000");

function MapScreen(props) {
  const [location, setLocation] = useState("");
  const [addPOI, setAddPOI] = useState(false);
  const [titrePOI, setTitrePOI] = useState("");
  const [descPOI, setDescPOI] = useState("");
  // const [listPOI, setlistPOI] = useState([]);
  const [visible, setVisible] = useState(false);
  const [usersPosition, setUsersPosition] = useState([]);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    async function askPermissions() {
      var { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === "granted") {
        Location.watchPositionAsync(
          { distance: 2, distanceInterval: 1 },
          (loc) => {
            setLocation({
              latitude: loc.coords.latitude,
              longitude: loc.coords.longitude,
            });
            // console.log("----PSEUDO ---- ");
            // console.log(props.myPseudo);
            socket.emit("sendLocation", {
              latitude: loc.coords.latitude,
              longitude: loc.coords.longitude,
              pseudo: props.myPseudo,
            });
          }
        );
      }
    }
    askPermissions();

    AsyncStorage.getItem("POIs", function (error, data) {
      const prevPOIs = JSON.parse(data);
      // console.log(prevPOIs);
      // console.log(data);
      if (data) {
        // set(prevPOIs);
        prevPOIs.forEach((poi) => {
          props.addPOI(poi);
        });
      }
    });
  }, []);

  useEffect(() => {
    socket.on("sendLocationAll", (newLocation) => {
      console.log("-----newUser-----");
      console.log(newLocation);
      console.log(usersPosition);
      setUsersPosition([...usersPosition, newLocation]);
    });
  }, [usersPosition]);

  async function addnewPOI(el) {
    if (addPOI) {
      const newPOI = {
        latitude: el.coordinate.latitude,
        longitude: el.coordinate.longitude,
        title: titrePOI,
        description: descPOI,
      };
      // setlistPOI((prev) => [...prev, newPOI]);
      props.addPOI(newPOI);

      let listPOIs = [];

      await AsyncStorage.getItem("POIs", function (error, data) {
        // console.log(data);
        if (data) {
          listPOIs = JSON.parse(data);
          console.log("----1----");
          console.log(listPOIs);
        }
      });
      await AsyncStorage.removeItem("POIs");
      console.log("----2-----");
      console.log(listPOIs);
      listPOIs.push(newPOI);
      console.log("-----3 ------");
      console.log(listPOIs);
      await AsyncStorage.setItem("POIs", JSON.stringify(listPOIs));

      setAddPOI(false);
    }
  }

  function confirmNewPOI() {
    setAddPOI(true);
    toggleOverlay();
  }

  function renderButton(addPOI) {
    if (!addPOI) {
      return (
        <Button
          title="Add POI"
          icon={{
            name: "location",
            type: "ionicon",
            size: 15,
            color: "#fff",
          }}
          iconContainerStyle={{ marginRight: 18 }}
          buttonStyle={styles.button}
          onPress={() => toggleOverlay()}
        />
      );
    } else return;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map} // mapType="satellite"
        showsTraffic={true}
        initialRegion={{
          latitude: 50.85, // pour centrer la carte
          longitude: 4.35,
          latitudeDelta: 20, // le rayon à afficher à partir du centre
          longitudeDelta: 20,
        }}
        onPress={(e) => addnewPOI(e.nativeEvent)}
      >
        <Marker
          pinColor="red"
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="I am here"
          description="Hello"
        />
        {props.myPOI.map((el, i) => (
          <Marker
            pinColor="blue"
            key={i}
            coordinate={{ latitude: el.latitude, longitude: el.longitude }}
            title={el.title}
            description={el.description}
            draggable
          />
        ))}
        {usersPosition.map((el, i) => (
          <Marker
            pinColor="green"
            key={i}
            coordinate={{ latitude: el.latitude, longitude: el.longitude }}
            title={el.pseudo}
            draggable
          />
        ))}
      </MapView>
      {renderButton(addPOI)}
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <View style={styles.modale}>
            <Input
              // value=""
              inputStyle={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
              }}
              placeholder="title"
              leftIcon={{
                marginRight: 5,
              }}
              onChangeText={(value) => setTitrePOI(value)}
            />
            <Input
              // value=""
              inputStyle={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
              }}
              placeholder="description"
              leftIcon={{
                marginRight: 5,
              }}
              onChangeText={(value) => setDescPOI(value)}
            />
            <Button
              title="Confirm"
              buttonStyle={{
                backgroundColor: "#eb4d4b",
                borderRadius: 3,
              }}
              onPress={() => confirmNewPOI()}
            />
          </View>
        </KeyboardAvoidingView>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#eee",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flex: 1,
  },
  button: {
    width: Dimensions.get("window").width,
    backgroundColor: "#eb4d4b",
  },
  modale: {
    width: 250,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    addPOI: function (poi) {
      dispatch({ type: "addPOI", poi });
    },
  };
}

function mapStateToProps(state) {
  return { myPOI: state.poi, myPseudo: state.pseudo };
}
// function mapStateToProps(state) {
//   return {};
// }

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);

// export default MapScreen;
