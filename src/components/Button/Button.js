import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const BUTTON_SIZE = 60;

const styles = StyleSheet.create({
  mainContainer: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: "center",
    alignItems: "center"
  }
});

export const Button = props => {
  const { iconName, colorPrimary, colorAccent, onPress } = props;
  return (
    <TouchableOpacity
      style={[styles.mainContainer, { backgroundColor: colorPrimary }]}
      onPress={onPress}
    >
      <FontAwesome name={iconName} size={BUTTON_SIZE / 2} color={colorAccent} />
    </TouchableOpacity>
  );
};

Button.propTypes = {
  iconName: PropTypes.string.isRequired,
  colorPrimary: PropTypes.string.isRequired,
  colorAccent: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
