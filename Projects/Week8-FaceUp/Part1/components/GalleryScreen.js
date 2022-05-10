import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Input, Icon, Button, Card, Image } from "react-native-elements";

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>Kiki's Gallery</Text>
      </View>
      <ScrollView style={styles.cards}>
        <View style={styles.card}>
          {/* <View style={styles.imgBg}></View> */}
          <View style={styles.img}>
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
              source={require("../assets/picture-1.jpg")}
            />
          </View>
          <View style={styles.types}>
            <View style={styles.type}>
              <Text styles={styles.text}>homme</Text>
            </View>
            <View style={styles.type}>
              <Text styles={styles.text}>70ans</Text>
            </View>
            <View style={styles.type}>
              <Text styles={styles.text}>barbe</Text>
            </View>
            <View style={styles.type}>
              <Text styles={styles.text}>joyeux</Text>
            </View>
            <View style={styles.type}>
              <Text styles={styles.text}>cheveux gris</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.img}>
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
              source={require("../assets/picture-2.jpg")}
            />
          </View>
          <View style={styles.types}>
            <View style={styles.type}>
              <Text styles={styles.text}>femme</Text>
            </View>
            <View style={styles.type}>
              <Text styles={styles.text}>lunettes</Text>
            </View>
            <View style={styles.type}>
              <Text styles={styles.text}>31 ans</Text>
            </View>
            <View style={styles.type}>
              <Text styles={styles.text}>joyeux</Text>
            </View>
            <View style={styles.type}>
              <Text styles={styles.text}>cheveux chatains</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 36,
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    // justifyContent: "center",
  },
  titleSection: {},
  title: {
    fontSize: 18,
    color: "#333",
    marginBottom: 20,
  },
  cards: {
    width: "90%",
    flex: 1,
    gap: 4,
  },
  card: {
    marginBottom: 20,
    width: "100%",
    heigh: 1000,
    backgroundColor: "#fff",
  },
  img: {
    width: "100%",
    height: 224,
    // backgroundColor: "red",
  },
  types: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    marginTop: 15,
  },
  type: {
    backgroundColor: "#009788",
    borderRadius: "50%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 2,
    marginTop: 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  text: {
    textAlign: "center",
    color: "#fff",
  },
});
