import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Regular text inputs</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        placeholder="Address"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bebec3",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 8,
  },
  header: {
    fontSize: 18,
    marginBottom: 8,
  },
});
