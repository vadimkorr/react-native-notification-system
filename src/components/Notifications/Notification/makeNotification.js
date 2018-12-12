import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ICON_SIZE = 100;

const styles = StyleSheet.create({
  mainContainer: {
    width: 300,
    padding: 10,
    overflow: "hidden"
  },
  icon: {
    position: "absolute",
    right: -ICON_SIZE / 5,
    bottom: -ICON_SIZE / 5,
    opacity: 0.2
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5
  },
  message: {
    fontSize: 17
  }
});

export const makeNotification = (iconName, colorPrimary, colorAccent) => {
  const NotificationBase = props => {
    const { title, message, onClosePress } = props;
    return (
      <TouchableOpacity
        style={[styles.mainContainer, { backgroundColor: colorPrimary }]}
        onPress={onClosePress}
      >
        <FontAwesome
          style={styles.icon}
          name={iconName}
          size={ICON_SIZE}
          color={colorAccent}
        />
        <Text style={[styles.title, { color: colorAccent }]}>{title}</Text>
        <Text style={[styles.message, { color: colorAccent }]}>{message}</Text>
      </TouchableOpacity>
    );
  };

  NotificationBase.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onClosePress: PropTypes.func
  };

  return NotificationBase;
};
