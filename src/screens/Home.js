import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Notifications } from "../components";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    color: "#d9d9d9"
  },
  notification: {
    marginBottom: 10
  }
});

export const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>react-native-notification-system</Text>
      <Notifications />
    </View>
  );
};
