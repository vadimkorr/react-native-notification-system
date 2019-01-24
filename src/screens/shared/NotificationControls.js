import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import {
  Button,
  NotificationsStore,
  withNotifications
} from "../../components";

const styles = StyleSheet.create({
  buttonControl: {
    marginBottom: 10
  }
});

const addSuccessNotification = notificationsStore => {
  notificationsStore.add({
    id: Date.now(),
    type: "success",
    title: "Lorem ipsum dolor",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  });
};
const addInfoNotification = notificationsStore => {
  notificationsStore.add({
    id: Date.now(),
    type: "info",
    title: "Lorem ipsum dolor",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  });
};
const addWarningNotification = notificationsStore => {
  notificationsStore.add({
    id: Date.now(),
    type: "warning",
    title: "Lorem ipsum dolor",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  });
};
const addErrorNotification = notificationsStore => {
  notificationsStore.add({
    id: Date.now(),
    type: "error",
    title: "Lorem ipsum dolor",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  });
};

const NotificationControlsInner = props => {
  const { store } = props;
  return (
    <React.Fragment>
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
            onPress={() => b.onPress(store)}
          />
        </View>
      ))}
    </React.Fragment>
  );
};

NotificationControlsInner.propType = {
  store: PropTypes.instanceOf(NotificationsStore).isRequired
};

export const NotificationControls = withNotifications(
  NotificationControlsInner
);
