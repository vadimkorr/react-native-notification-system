import React from "react";
import { View, StyleSheet } from "react-native";
import { Notification } from "../components";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  notification: {
    marginBottom: 10
  }
});

export const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.notification}>
        <Notification
          type="success"
          title="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </View>
      <View style={styles.notification}>
        <Notification
          type="info"
          title="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </View>
      <View style={styles.notification}>
        <Notification
          type="warning"
          title="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </View>
      <View style={styles.notification}>
        <Notification
          type="error"
          title="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </View>
    </View>
  );
};
