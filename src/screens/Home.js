import React from "react";
import { View, StyleSheet } from "react-native";
import {
  SuccessNotification,
  InfoNotification,
  WarningNotification,
  ErrorNotification
} from "../components";

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
        <SuccessNotification
          title="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </View>
      <View style={styles.notification}>
        <InfoNotification
          title="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </View>
      <View style={styles.notification}>
        <WarningNotification
          title="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </View>
      <View style={styles.notification}>
        <ErrorNotification
          title="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </View>
    </View>
  );
};
