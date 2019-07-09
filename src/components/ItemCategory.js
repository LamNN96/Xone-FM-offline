import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../theme/styles";

export default class ItemCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onItemClick = () => {
    const { navigation, item } = this.props;
    navigation.navigate("DownloadMp3", {
      item
    });
  };

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity
        style={styles.itemCategoryContainer}
        onPress={this.onItemClick}
      >
        <Image source={item.image} style={styles.categoryImage} />
        <Text style={styles.textNameCategory}>{item.name}</Text>
      </TouchableOpacity>
    );
  }
}
