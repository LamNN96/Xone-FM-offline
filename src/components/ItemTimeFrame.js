import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../theme/styles";
import AntDesign from "react-native-vector-icons/AntDesign";

export default class ItemTimeFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, downloadFile } = this.props;
    return (
      <TouchableOpacity style={styles.itemTimeFrameContainer}>
        <Text style={styles.textSelectedDate}>{item.label}</Text>
        <TouchableOpacity
          style={styles.downloadIconContainer}
          onPress={() => downloadFile(item)}
        >
          <AntDesign name="download" style={styles.downloadIcon} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}
