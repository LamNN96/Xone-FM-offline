import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../theme/styles";

export default class ItemAudio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("item audio", this.props.item);
    const { item, playAudio } = this.props;
    return (
      <View>
        <TouchableOpacity
          style={styles.itemAudioContainer}
          onPress={() => playAudio(item)}
        >
          <Text> {item} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
