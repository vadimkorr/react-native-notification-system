import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { observer } from "mobx-react";
import { Notification } from "../Notification";
import { NotificationsStore, withNotifications } from "../store";

const NotificationsInner = observer(props => {
  const { store } = props;
  return (
    <React.Fragment>
      {store.notifications.map((notification, index) => (
        <View
          key={notification.id}
          style={{
            marginTop: index !== 0 ? 10 : 0
          }}
        >
          <Notification
            type={notification.type}
            title={notification.title}
            message={notification.message}
            onClosePress={() => {
              store.remove(notification);
            }}
          />
        </View>
      ))}
    </React.Fragment>
  );
});

NotificationsInner.propTypes = {
  store: PropTypes.instanceOf(NotificationsStore)
};

export const Notifications = withNotifications(NotificationsInner);
