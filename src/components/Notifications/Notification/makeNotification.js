import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, Text, Animated } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ICON_SIZE = 100;
const ANIMATION_DURATION = 150;
const NOTIFICATION_HEIGHT = 150;

const styles = StyleSheet.create({
  mainContainer: {
    width: 270,
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
  function NotificationBase(props) {
    const { title, message, onClosePress } = props;
    const [animated] = React.useState(new Animated.Value(0));

    React.useEffect(() => {
      Animated.timing(animated, {
        toValue: 1,
        duration: ANIMATION_DURATION
      }).start();
    }, []);

    return (
      <TouchableOpacity
        onPress={() => {
          if (onClosePress) {
            Animated.timing(animated, {
              toValue: 0,
              duration: ANIMATION_DURATION
            }).start(onClosePress);
          }
        }}
      >
        <Animated.View
          style={[
            {
              opacity: animated,
              height: animated.interpolate({
                inputRange: [0, 1],
                outputRange: [0, NOTIFICATION_HEIGHT],
                extrapolate: "clamp"
              }),
              transform: [
                {
                  translateX: animated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [30, 0],
                    extrapolate: "clamp"
                  })
                }
              ]
            },
            styles.mainContainer,
            { backgroundColor: colorPrimary }
          ]}
        >
          <FontAwesome
            style={styles.icon}
            name={iconName}
            size={ICON_SIZE}
            color={colorAccent}
          />
          <Text style={[styles.title, { color: colorAccent }]}>{title}</Text>
          <Text style={[styles.message, { color: colorAccent }]}>
            {message}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }

  NotificationBase.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onClosePress: PropTypes.func
  };

  return NotificationBase;
};
