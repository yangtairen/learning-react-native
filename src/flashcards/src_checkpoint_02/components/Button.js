import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ViewPropTypes,
  TouchableOpacity
} from "react-native";

import colors from "./../styles/colors";

class Button extends Component {
  static displayName = "Button";

  render() {
    let opacity = this.props.disabled ? 1 : 0.5;
    return (
      <TouchableOpacity
        activeOpacity={opacity}
        onPress={this.props.onPress}
        style={[styles.wideButton, this.props.style]}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  onPress: React.PropTypes.func,
  style: ViewPropTypes.style,
  children: React.PropTypes.object,
  disabled: React.PropTypes.bool
};

Button.defaultProps = { disabled: false };

export default Button;

const styles = StyleSheet.create({
  wideButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: colors.pink
  }
});
