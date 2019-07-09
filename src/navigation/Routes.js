import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Home from "../components/Home";
import DownloadMp3 from "../components/DownloadMp3";
import ListMp3 from "../components/ListMp3";

const Mp3TabNavigator = createBottomTabNavigator({
  DownloadMp3: DownloadMp3,
  ListMp3: ListMp3,
});

const Routes = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    DownloadMp3: {
      screen: Mp3TabNavigator
    },

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null
    }
  }
);

let Navigation = createAppContainer(Routes);
export default Navigation;
