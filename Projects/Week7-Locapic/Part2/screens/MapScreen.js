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

function MapScreen(props) {
  const [location, setLocation] = useState("");
  const [addPOI, setAddPOI] = useState(false);
  const [titrePOI, setTitrePOI] = useState("");
  const [descPOI, setDescPOI] = useState("");
  // const [listPOI, setlistPOI] = useState([]);
  const [visible, setVisible] = useState(false);

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
          }
        );
      }
    }
    askPermissions();
  }, []);

  function addnewPOI(el) {
    console.log("hey");
    if (addPOI) {
      console.log("heere");
      const newPOI = {
        latitude: el.coordinate.latitude,
        longitude: el.coordinate.longitude,
        title: titrePOI,
        description: descPOI,
      };
      // setlistPOI((prev) => [...prev, newPOI]);

      props.addPOI(newPOI);
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
          latitude: 48.866667, // pour centrer la carte
          longitude: 2.333333,
          latitudeDelta: 0.0922, // le rayon à afficher à partir du centre
          longitudeDelta: 0.0421,
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
  return { myPOI: state.poi };
}
// function mapStateToProps(state) {
//   return {};
// }

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);

// export default MapScreen;
