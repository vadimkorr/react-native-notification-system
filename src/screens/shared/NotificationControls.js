import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import {
  Button,
  NotificationsStore,
  withNotifications
} from "../../components";

const createSuccessNotification = (title, message) => {
  return {
    id: Date.now(),
    type: "success",
    title,
    message
  };
};

const createInfoNotification = (title, message) => {
  return {
    id: Date.now(),
    type: "info",
    title,
    message
  };
};

const createWarningNotification = (title, message) => {
  return {
    id: Date.now(),
    type: "warning",
    title,
    message
  };
};

const createErrorNotification = (title, message) => {
  return {
    id: Date.now(),
    type: "error",
    title,
    message
  };
};

const controls = [
  {
    key: "create-success-notification-button",
    iconName: "check",
    colorPrimary: "#cbf0c4",
    colorAccent: "#3c763d",
    onPress: store => {
      store.add(
        createSuccessNotification(
          "Success",
          "This message tells that everything goes fine."
        )
      );
    }
  },
  {
    key: "create-info-notification-button",
    iconName: "info",
    colorPrimary: "#b1edf7",
    colorAccent: "#31708f",
    onPress: store => {
      store.add(
        createInfoNotification(
          "Information",
          "This message presents information that the user might find helpful."
        )
      );
    }
  },
  {
    key: "create-warning-notification-button",
    iconName: "exclamation",
    colorPrimary: "#fcf8bb",
    colorAccent: "#8a6d3b",
    onPress: store => {
      store.add(
        createWarningNotification(
          "Warning",
          "This message warn users about important actions they need to take."
        )
      );
    }
  },
  {
    key: "create-error-notification-button",
    iconName: "times",
    colorPrimary: "#f2c8c8",
    colorAccent: "#a94442",
    onPress: store => {
      store.add(
        createErrorNotification(
          "Error",
          "This message informs users that a problem occurred."
        )
      );
    }
  }
];

const NotificationControlsInner = props => {
  const { store } = props;
  return (
    <React.Fragment>
      {controls.map((b, i) => (
        <View
          key={b.key}
          style={{ marginBottom: i !== controls.length - 1 ? 10 : 0 }}
        >
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
