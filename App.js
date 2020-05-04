import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { Constants } from "expo";

import Contacts from "./Contacts";

export default class App extends React.Component {
  state = {
    showContacts: false,
  };

  toggleContacts = () => {
    this.setState((prevState) => ({ showContacts: !prevState.showContacts }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <ScrollView>
          {Contacts.map((contact) => (
            <Text key={contact.key}>{contact.name}</Text>
          ))}
        </ScrollView>
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
