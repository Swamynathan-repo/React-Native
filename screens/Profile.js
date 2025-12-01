import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <TouchableOpacity style={styles.go} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.goText}>Go for settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  go: {
    marginTop: 50,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  goText: {
    color: 'white',
    fontSize: 18,
  }
});
