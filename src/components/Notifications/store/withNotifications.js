import React from "react";
import { NotificationsStore } from "./notificationsStore";
import PropTypes from "prop-types";

const testNotifications = [
  {
    id: "0",
    type: "success",
    title: "Success",
    message: "This message tells that everything goes fine."
  },
  {
    id: "2",
    type: "info",
    title: "Information",
    message: "This message presents information that the user might find helpful."
  },
  {
    id: "3",
    type: "warning",
    title: "Warning",
    message: "This message warn users about important actions they need to take."
  },
  {
    id: "4",
    type: "error",
    title: "Error",
    message: "This message informs users that a problem occurred."
  }
];
const notificationsStore = new NotificationsStore(testNotifications);

export const withNotifications = WrappedComponent => {
  WrappedComponent.propTypes = {
    store: PropTypes.instanceOf(NotificationsStore).isRequired
  };
  const Component = props => (
    <WrappedComponent {...props} store={notificationsStore} />
  );
  return Component;
};
