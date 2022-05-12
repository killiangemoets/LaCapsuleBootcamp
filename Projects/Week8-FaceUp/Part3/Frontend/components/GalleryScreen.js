import React, { useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Input, Icon, Button, Card, Image } from "react-native-elements";
import { connect } from "react-redux";

function GalleryScreen(props) {
  // console.log("----GALLERY----");
  // console.log(props.myImages);

  useEffect(() => {
    console.log("Done");
    async function loadImages() {
      console.log("---DOWNLOAD----");
      var rawResponse = await fetch("http://172.20.10.4:3000/download");
      var response = await rawResponse.json();
      // console.log(response);
      response.forEach((img) => {
        // console.log(img.name);
        console.log(img.url);
        if (!props.myImages.find((image) => image.name === img.name))
          props.addImage({
            name: img.name,
            url: img.url,
            gender: img.gender,
            age: img.age,
          });
      });
    }
    loadImages();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>Kiki's Gallery</Text>
      </View>
      <ScrollView style={styles.cards}>
        {props.myImages.map((image, i) => {
          return (
            <View style={styles.card} key={i}>
              <View style={styles.img}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  // resizeMode="contain"
                  source={{ uri: image?.url }}
                />
              </View>
              <View style={styles.types}>
                <View style={styles.type}>
                  <Text styles={styles.text}>{image?.gender}</Text>
                </View>
                <View style={styles.type}>
                  <Text styles={styles.text}>{image?.age}</Text>
                </View>
              </View>
            </View>
          );
        })}
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
    height: 200,
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

function mapDispatchToProps(dispatch) {
  return {
    addImage: function (image) {
      dispatch({ type: "addurl", image });
    },
  };
}

function mapStateToProps(state) {
  return { myImages: state.myImages };
}

// export default ScreenMyArticles;
export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);
