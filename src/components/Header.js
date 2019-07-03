import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../theme/styles";
import Icon from "react-native-vector-icons/Ionicons";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={this.onMenuClick}
          style={styles.headerLeftPanel}
        >
          <Icon name="md-menu" style={styles.iconMenu} />
        </TouchableOpacity>
      </View>
    );
  }
}
