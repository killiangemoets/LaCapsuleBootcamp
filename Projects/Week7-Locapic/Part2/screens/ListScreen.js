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

function ListScreen(props) {
  console.log(props.myPOI);
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
              onPress={() => props.deletePOI(el.title)}
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
