import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { Button } from "@rneui/themed";
import { Overlay, Input } from "react-native-elements";

function MapScreen() {
  const [location, setLocation] = useState("");
  // const [addPOI, setAddPOI] = useState(false);
  const [newPOI, setnewPOI] = useState([]);
  const [titrePOI, setTitrePOI] = useState("");
  const [descPOI, setDescPOI] = useState("");
  const [listPOI, setlistPOI] = useState([]);
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    async function askPermissions() {
      var { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === "granted") {
        // var location = await Location.getCurrentPositionAsync({});
        // console.log("Fist", location);

        Location.watchPositionAsync(
          { distance: 2, distanceInterval: 1 },
          (loc) => {
            // console.log("Second", loc);
            setLocation({
              latitude: loc.coords.latitude,
              longitude: loc.coords.longitude,
            });
          }
        );
      }
    }
    askPermissions();
  }, []);

  function addnewPOI(el) {
    setnewPOI([el.coordinate.latitude, el.coordinate.longitude]);
  }

  function confirmNewPOI() {
    if (newPOI.length > 0) {
      setlistPOI((prev) => [
        ...prev,
        {
          latitude: newPOI[0],
          longitude: newPOI[1],
          title: titrePOI,
          description: descPOI,
        },
      ]);
      setnewPOI([]);
    }
    toggleOverlay();
  }

  function renderButton() {
    if (newPOI.length > 0) {
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

  function renderNewPOI(newPOI) {
    if (newPOI.length > 0) {
      return (
        <Marker
          pinColor="red"
          coordinate={{
            latitude: newPOI[0],
            longitude: newPOI[1],
          }}
          draggable
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
          latitude: 48.866667, // pour centrer la carte
          longitude: 2.333333,
          latitudeDelta: 0.0922, // le rayon à afficher à partir du centre
          longitudeDelta: 0.0421,
        }}
        onPress={(e) => addnewPOI(e.nativeEvent)}
      >
        <Marker
          pinColor="green"
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="I am here"
          description="Hello"
        />
        {listPOI.map((el, i) => (
          <Marker
            pinColor="blue"
            key={i}
            coordinate={{ latitude: el.latitude, longitude: el.longitude }}
            title={el.title}
            description={el.description}
          />
        ))}
        {renderNewPOI(newPOI)}
      </MapView>
      {renderButton(newPOI)}
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={styles.modale}>
          <Input
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
      </Overlay>
    </View>
  );
}

export default MapScreen;

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
