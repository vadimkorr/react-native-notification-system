import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Notifications } from "../components";
import { NotificationControls } from "./shared";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 30,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    color: "#afafaf"
  },
  description: {
    fontSize: 17,
    color: "#afafaf",
    textAlign: "center"
  },
  notificationControlsContainer: {
    position: "absolute",
    bottom: 10,
    right: 10
  },
  notificationsContainer: {
    position: "absolute",
    bottom: 10,
    left: 10
  }
});

export const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>react-native-notification-system</Text>
      <Text style={styles.description}>
        (tap on notification to close it, use button controls to create
        notifications of corresponding types)
      </Text>
      <View style={styles.notificationControlsContainer}>
        <NotificationControls />
      </View>
      <View style={styles.notificationsContainer}>
        <Notifications />
      </View>
    </View>
  );
};
