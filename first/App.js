/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, TouchableOpacityBase, Text } from 'react-native'

import CustomButton from './src/components/CustomButton/CustomButton'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }

    console.log('contructor')

    this.handleDown = this.handleDown.bind(this)
    this.handleUp = this.handleUp.bind(this)
  }

  componentDidMount() {
    //for asyncronous requested
    console.log('componentDidMount')
  }

  handleUp() {
    const { counter: ct } = this.state
    this.setState({ counter: ct + 1 })
  }

  handleDown() {
    const { counter: ct } = this.state
    this.setState({ counter: ct - 1 })
  }

  render() {
    const { counter } = this.state
    return (
      <View style={styles.constainer}>
        <View style={styles.subcontainer}>
          <CustomButton action={this.handleDown} label="-" />
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{counter}</Text>
          </View>
          <CustomButton action={this.handleUp} label="+" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center'
  },
  subcontainer: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  counter: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold'
  }
})

export default App
