/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.constainer}>
        <View style={styles.subcontainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer: {
    height: 40,
    width: 40,
    backgroundColor: 'green',
  },
});

export default App;
