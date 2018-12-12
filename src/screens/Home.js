import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Notifications, NotificationsStore, Button } from "../components";

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
  buttonControl: {
    marginBottom: 10
  },
  buttonControlsContainer: {
    position: "absolute",
    marginTop: 30,
    marginRight: 5,
    top: 0,
    right: 0
  }
});

const notificationsStore = new NotificationsStore();

const addSuccessNotification = () => {
  notificationsStore.add({
    id: Date.now(),
    type: "success",
    title: "Lorem ipsum dolor",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  });
};
const addInfoNotification = () => {
  notificationsStore.add({
    id: Date.now(),
    type: "info",
    title: "Lorem ipsum dolor",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  });
};
const addWarningNotification = () => {
  notificationsStore.add({
    id: Date.now(),
    type: "warning",
    title: "Lorem ipsum dolor",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  });
};
const addErrorNotification = () => {
  notificationsStore.add({
    id: Date.now(),
    type: "error",
    title: "Lorem ipsum dolor",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  });
};

export const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>react-native-notification-system</Text>
      <View style={styles.buttonControlsContainer}>
        {[
          {
            key: "create-success-notification-button",
            iconName: "check",
            colorPrimary: "#dff0d8",
            colorAccent: "#3c763d",
            onPress: addSuccessNotification
          },
          {
            key: "create-info-notification-button",
            iconName: "info",
            colorPrimary: "#d9edf7",
            colorAccent: "#31708f",
            onPress: addInfoNotification
          },
          {
            key: "create-warning-notification-button",
            iconName: "exclamation",
            colorPrimary: "#fcf8e3",
            colorAccent: "#8a6d3b",
            onPress: addWarningNotification
          },
          {
            key: "create-error-notification-button",
            iconName: "times",
            colorPrimary: "#f2dede",
            colorAccent: "#a94442",
            onPress: addErrorNotification
          }
        ].map(b => (
          <View key={b.key} style={styles.buttonControl}>
            <Button
              iconName={b.iconName}
              colorPrimary={b.colorPrimary}
              colorAccent={b.colorAccent}
              onPress={b.onPress}
            />
          </View>
        ))}
      </View>
      <Notifications store={notificationsStore} />
    </View>
  );
};
