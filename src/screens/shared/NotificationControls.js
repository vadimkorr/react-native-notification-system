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
    colorPrimary: "#dff0d8",
    colorAccent: "#3c763d",
    onPress: store => {
      store.add(
        createSuccessNotification(
          "Lorem ipsum dolor",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        )
      );
    }
  },
  {
    key: "create-info-notification-button",
    iconName: "info",
    colorPrimary: "#d9edf7",
    colorAccent: "#31708f",
    onPress: store => {
      store.add(
        createInfoNotification(
          "Lorem ipsum dolor",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        )
      );
    }
  },
  {
    key: "create-warning-notification-button",
    iconName: "exclamation",
    colorPrimary: "#fcf8e3",
    colorAccent: "#8a6d3b",
    onPress: store => {
      store.add(
        createWarningNotification(
          "Lorem ipsum dolor",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        )
      );
    }
  },
  {
    key: "create-error-notification-button",
    iconName: "times",
    colorPrimary: "#f2dede",
    colorAccent: "#a94442",
    onPress: store => {
      store.add(
        createErrorNotification(
          "Lorem ipsum dolor",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
