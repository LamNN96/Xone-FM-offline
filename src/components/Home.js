import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Header from "./Header";
import styles from "../theme/styles";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Header />
        <View>
          <Image
            source={require("../assets/logo.jpg")}
            style={styles.logoContainer}
          />
        </View>
      </View>
    );
  }
}
