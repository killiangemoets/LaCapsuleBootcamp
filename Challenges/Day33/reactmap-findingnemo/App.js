import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default function App() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    async function askPermissions() {
      var { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === "granted") {
        // var location = await Location.getCurrentPositionAsync({});
        // console.log("Fist", location);

        Location.watchPositionAsync(
          { distance: 1, distanceInterval: 1 },
          (loc) => {
            console.log("Second", loc);
            setLocation(loc.coords);
          }
        );
      }
    }
    askPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        // mapType="satellite"
        showsTraffic={true}
        // zoomEnabled={false}
        style={styles.map}
        initialRegion={{
          latitude: location.latitude, // pour centrer la carte
          longitude: location.longitude,
          latitudeDelta: 0.0922, // le rayon à afficher à partir du centre
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 48.866667, longitude: 2.333333 }}
          title="Paris"
          description="Hello hello"
          draggable
        />
        {/* <Marker coordinate={{ latitude: 50.8, longitude: 4.36 }} /> */}
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
