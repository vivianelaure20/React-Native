import React from "react";
import { StyleSheet, View } from "react-native";
import { Constants } from "expo";

import Switch from "./Switch";

export default class App extends React.Component {
  state = {
    showContacts: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <Switch />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
