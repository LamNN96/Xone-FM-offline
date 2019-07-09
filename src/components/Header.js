import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../theme/styles";
import Icon from "react-native-vector-icons/Ionicons";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onBackClick = () => {
    this.props.navigation.goBack();
  }

  render() {
    const { isHome } = this.props;
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={isHome ? this.onMenuClick : this.onBackClick}
          style={styles.headerLeftPanel}
        >
          <Icon name={isHome ? "md-menu" : "md-arrow-back"} style={styles.iconMenu} />
        </TouchableOpacity>
      </View>
    );
  }
}
