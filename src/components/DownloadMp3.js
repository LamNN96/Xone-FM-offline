import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import RNFetchBlob from "rn-fetch-blob";
import Sound from "react-native-sound";
import ItemAudio from "./ItemAudio";
import { sprintf } from "printj";
import { configuration } from "../configs/configs";

export default class DownloadMp3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
    Sound.setCategory("Playback");
  }

  downloadFile = date => {
    let dirs = RNFetchBlob.fs.dirs;
    RNFetchBlob.config({
      fileCache: true,
      appendExt: "mp3",
      path:
        dirs.DocumentDir + "/V89-1606-07h00-BREAKFASTXONE-danhthucngaymoi.mp3"
    })
      .fetch(
        "GET",
        "https://xonefm.com/wp-content/uploads/2019/06/V89-1606-07h00-BREAKFASTXONE-danhthucngaymoi.mp3",
        {
          //some headers ..
        }
      )
      .then(res => {
        // the temp file path with file extension `png`
        console.log("The file saved to ", res.path());
        // Beware that when using a file path as Image source on Android,
        // you must prepend "file://"" before the file path
      });
  };

  playAudio = item => {
    let dirs = RNFetchBlob.fs.dirs;
    let path = sprintf(configuration.format.filePath, dirs.DocumentDir, item);
    console.log(path);
    var whoosh = new Sound(path.toString(), Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log("failed to load the sound", error);
        return;
      }
      // loaded successfully
      console.log(
        "duration in seconds: " +
          whoosh.getDuration() +
          "number of channels: " +
          whoosh.getNumberOfChannels()
      );

      // Play the sound with an onEnd callback
      whoosh.play(success => {
        if (success) {
          console.log("successfully finished playing");
        } else {
          console.log("playback failed due to audio decoding errors");
        }
      });
    });
  };

  getListAudio = () => {
    RNFetchBlob.fs
      .ls("/data/user/0/com.xonefm/files/")
      // files will an array contains filenames
      .then(files => {
        console.log(files);
        this.setState({
          files
        });
      });
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, index }) => {
    return <ItemAudio item={item} index={index} playAudio={this.playAudio} />;
  };

  componentDidMount() {
    this.getListAudio();
  }

  render() {
    const { files } = this.state;
    return (
      <View>
        <Text> App </Text>
        <FlatList
          data={files}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}
