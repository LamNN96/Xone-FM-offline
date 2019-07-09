import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import RNFetchBlob from "rn-fetch-blob";
import Sound from "react-native-sound";
import ItemAudio from "./ItemAudio";
import { sprintf } from "printj";
import { Calendar } from "react-native-calendars";
import Header from "./Header";
import { configuration } from "../configs/configs";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "../theme/styles";
import moment from "moment";
import _ from "lodash";

export default class DownloadMp3 extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const { item } = props.navigation.state.params;
    this.state = {
      files: [],
      item,
      selected: moment(new Date()).format(configuration.format.date)
    };
    Sound.setCategory("Playback");
  }

  downloadFile = timeFrame => {
    const { selected, item } = this.state;
    let dirs = RNFetchBlob.fs.dirs;
    let selectedDate = new Date(selected);
    let year = selectedDate.getFullYear();
    let month = selectedDate.getMonth() + 1;
    let stringOfMonth = month < 10 ? "0" + month : month;
    let day = selectedDate.getDate();
    let stringOfDay = day < 10 ? "0" + day : day;
    let link = sprintf(
      timeFrame.linkFormat,
      year,
      stringOfMonth,
      stringOfDay,
      stringOfMonth
    );
    let path = sprintf(
      configuration.format.fileSavedPath,
      dirs.DocumentDir,
      timeFrame.label,
      stringOfDay,
      stringOfMonth,
      year,
      _.kebabCase(item.name)
    );
    RNFetchBlob.config({
      fileCache: true,
      appendExt: "mp3",
      path
    })
      .fetch("GET", link)
      .progress((received, total) => {
        console.log("progress", received / total);
      })
      .then(res => {
        console.log(res);
        // the temp file path with file extension `png`
        console.log("The file saved to ", res.path());
        // Beware that when using a file path as Image source on Android,
        // you must prepend "file://"" before the file path
      })
      .catch(err => console.log(err));
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

  onDayPress = day => {
    this.setState({
      selected: day.dateString
    });
  };

  showCalender = markedDates => {
    return (
      <Calendar
        onDayPress={day => this.onDayPress(day)}
        onDayLongPress={day => this.onDayLongPress(day)}
        monthFormat={"MMMM yyyy"}
        onMonthChange={month => {
          console.log("month changed", month);
        }}
        markedDates={{
          [this.state.selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange"
          }
        }}
        disableMonthChange={true}
        firstDay={1}
        onPressArrowLeft={substractMonth => substractMonth()}
        onPressArrowRight={addMonth => addMonth()}
      />
    );
  };

  onDayLongPress = day => {};

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, index }) => {
    return <ItemAudio item={item} index={index} playAudio={this.playAudio} />;
  };

  renderItemTimeFrames = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.downloadIconContainer}
        onPress={() => this.downloadFile(item)}
      >
        <Text style={styles.textSelectedDate}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  componentDidMount() {
    this.getListAudio();
  }

  render() {
    const { files, item, selected } = this.state;
    const { navigation } = this.props;
    return (
      <View>
        <Header navigation={navigation} isHome={false} />
        {this.showCalender(this.markedDates)}
        <View style={styles.downloadPanel}>
          <View style={styles.selctedDatePanel}>
            <Text style={styles.textSelectedDate}>{selected}</Text>
          </View>
          <TouchableOpacity style={styles.downloadIconContainer}>
            <AntDesign name="download" style={styles.downloadIcon} />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.downloadPanel}>
          <TouchableOpacity
            style={styles.downloadIconContainer}
            onPress={this.downloadFile(selected)}
          >
            <Text style={styles.textSelectedDate}>7h-8h</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.downloadIconContainer}
            onPress={this.downloadFile(selected)}
          >
            <Text style={styles.textSelectedDate}>8h-9h</Text>
          </TouchableOpacity>
        </View> */}

        <FlatList
          renderItem={this.renderItemTimeFrames}
          keyExtractor={this.keyExtractor}
          data={item.timeFrames}
          numColumns={_.size(item.timeFrames)}
        />
      </View>
    );
  }
}
