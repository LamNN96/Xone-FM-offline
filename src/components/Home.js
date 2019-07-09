import React, { Component } from "react";
import { View, FlatList, Image } from "react-native";
import Header from "./Header";
import styles from "../theme/styles";
import { categories } from "../configs/configs";
import ItemCategory from "./ItemCategory";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, index }) => {
    return (
      <ItemCategory
        item={item}
        index={index}
        navigation={this.props.navigation}
      />
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.flex1}>
        <Header navigation={navigation} isHome={true} />
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo.jpg")}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.mainPanel}>
          <FlatList
            data={categories}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            numColumns={2}
          />
        </View>
      </View>
    );
  }
}
