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
  class NotificationBase extends React.Component {
    constructor(props) {
      super(props);
      this._animated = new Animated.Value(0);
    }

    componentDidMount() {
      Animated.timing(this._animated, {
        toValue: 1,
        duration: ANIMATION_DURATION
      }).start();
    }

    onClosePress = () => {
      const { onClosePress } = this.props;
      if (onClosePress) {
        Animated.timing(this._animated, {
          toValue: 0,
          duration: ANIMATION_DURATION
        }).start(onClosePress);
      }
    };

    render() {
      const { title, message } = this.props;

      const animatedStyles = [
        {
          opacity: this._animated,
          height: this._animated.interpolate({
            inputRange: [0, 1],
            outputRange: [0, NOTIFICATION_HEIGHT],
            extrapolate: "clamp"
          }),
          transform: [
            {
              translateX: this._animated.interpolate({
                inputRange: [0, 1],
                outputRange: [30, 0],
                extrapolate: "clamp"
              })
            }
          ]
        }
      ];

      return (
        <TouchableOpacity onPress={this.onClosePress}>
          <Animated.View
            style={[
              animatedStyles,
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
  }

  NotificationBase.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onClosePress: PropTypes.func
  };

  return NotificationBase;
};
