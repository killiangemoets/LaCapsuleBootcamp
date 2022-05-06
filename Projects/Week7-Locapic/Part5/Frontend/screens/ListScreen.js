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
import AsyncStorage from "@react-native-async-storage/async-storage";

function ListScreen(props) {
  // console.log(props.myPOI);

  async function deleteAPOI(title) {
    props.deletePOI(title);

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
    listPOIs = listPOIs.filter((poi) => poi.title !== title);
    console.log("-----3 ------");
    console.log(listPOIs);
    await AsyncStorage.setItem("POIs", JSON.stringify(listPOIs));
  }
  return (
    <ScrollView style={styles.container}>
      {props.myPOI.map((el, i) => (
        <ListItem key={i} bottomDivider>
          <ListItem.Content style={styles.list}>
            <View>
              <ListItem.Title>{el.title}</ListItem.Title>
              <ListItem.Subtitle>{el.description}</ListItem.Subtitle>
            </View>
            <Button
              icon={{
                name: "close",
                type: "font-awesome",
                size: 20,
                color: "#333",
              }}
              iconContainerStyle={{ marginRight: 10 }}
              buttonStyle={{
                backgroundColor: "#fff",
                margin: 0,
                borderRadius: 3,
              }}
              onPress={() => deleteAPOI(el.title)}
            />
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
}

// export default ListScreen;
function mapDispatchToProps(dispatch) {
  return {
    deletePOI: function (title) {
      dispatch({ type: "deletePOI", title });
    },
  };
}

function mapStateToProps(state) {
  return { myPOI: state.poi };
}

// export default ScreenMyArticles;
export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    marginTop: 30,
    overflow: "scroll",
  },
  list: {
    margin: 0,
    padding: 0,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
