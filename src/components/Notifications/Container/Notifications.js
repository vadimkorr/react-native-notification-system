import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { observer } from "mobx-react";
import { Notification } from "../Notification";
import { NotificationsStore } from "../store";

const styles = StyleSheet.create({
  notificationsContainer: {
    position: "absolute",
    bottom: 10,
    left: 10
  }
});

@observer
export class Notifications extends React.Component {
  onCloseNotification = closedNotification => {
    const { store } = this.props;
    store.remove(closedNotification);
  };

  render() {
    const { store } = this.props;
    return (
      <View style={styles.notificationsContainer}>
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
                this.onCloseNotification(notification);
              }}
            />
          </View>
        ))}
      </View>
    );
  }
}

Notifications.propTypes = {
  store: PropTypes.instanceOf(NotificationsStore)
};
