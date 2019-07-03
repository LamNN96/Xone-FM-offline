import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import { rootReducer } from "../reducers";
import Navigation from "./Routes";

const store = createStore(rootReducer);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
