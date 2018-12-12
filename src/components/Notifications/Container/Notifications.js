import React from "react";
import { View, StyleSheet } from "react-native";
import { Notification } from "../Notification";

const styles = StyleSheet.create({
  notificationsContainer: {
    position: "absolute",
    bottom: 10,
    left: 10
  }
});

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

export class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: testNotifications
    };
  }

  onCloseNotification = closedNotification => {
    this.setState({
      notifications: this.state.notifications.filter(
        notification => notification.id != closedNotification.id
      )
    });
  };

  render() {
    return (
      <View style={styles.notificationsContainer}>
        {this.state.notifications.map((notification, index) => (
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
