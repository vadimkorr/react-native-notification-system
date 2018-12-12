import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Notifications, NotificationsStore } from "../components";
import { NotificationControls } from "./shared";

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
  notificationControlsContainer: {
    position: "absolute",
    marginTop: 30,
    marginRight: 5,
    top: 0,
    right: 0
  }
});

const testNotifications = [
  {
    id: "0",
    type: "success",
    title: "Lorem ipsum dolor",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: "2",
    type: "info",
    title: "Lorem ipsum dolor",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: "3",
    type: "warning",
    title: "Lorem ipsum dolor",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: "4",
    type: "error",
    title: "Lorem ipsum dolor",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

const notificationsStore = new NotificationsStore(testNotifications);

export const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>react-native-notification-system</Text>
      <View style={styles.notificationControlsContainer}>
        <NotificationControls store={notificationsStore} />
      </View>
      <Notifications store={notificationsStore} />
    </View>
  );
};
