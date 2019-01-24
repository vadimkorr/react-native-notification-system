import React from "react";
import { NotificationsStore } from "./notificationsStore";
import PropTypes from "prop-types";

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

export const withNotifications = WrappedComponent => {
  WrappedComponent.propTypes = {
    store: PropTypes.instanceOf(NotificationsStore).isRequired
  };
  const Component = props => (
    <WrappedComponent {...props} store={notificationsStore} />
  );
  return Component;
};
