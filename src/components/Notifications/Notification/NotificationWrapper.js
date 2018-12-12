import React from "react";
import PropTypes from "prop-types";
import { SuccessNotification } from "./SuccessNotification";
import { InfoNotification } from "./InfoNotification";
import { WarningNotification } from "./WarningNotification";
import { ErrorNotification } from "./ErrorNotification";

export const NotificationWrapper = props => {
  const { type } = props;
  switch (type) {
    case "success":
      return <SuccessNotification {...props} />;
    default:
    case "info":
      return <InfoNotification {...props} />;
    case "warning":
      return <WarningNotification {...props} />;
    case "error":
      return <ErrorNotification {...props} />;
  }
};

NotificationWrapper.propTypes = {
  type: PropTypes.oneOf(["success", "info", "warning", "error"]),
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClosePress: PropTypes.func
};
