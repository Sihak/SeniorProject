/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import AppRouting from './app/config/appRouting';
import { YellowBox } from 'react-native';
import { Provider } from 'mobx-react';
import store from './app/store';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Class RCTCxxModule', 'Method `jumpToIndex`', 'Module RCTImageLoader']);


export default class App extends Component {
  render() {
    return (
      <Provider {...store} >
        <AppRouting />
      </Provider>
    );
  }
}

