import React, { Component } from "react";
import { View, Text } from "react-native";
import Header from "./Header";

export default class ListMp3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Header navigation={navigation} isHome={false} />
      </View>
    );
  }
}
