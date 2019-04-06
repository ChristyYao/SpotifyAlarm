import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default class Time extends Component {
  render() {
    var now = Date.now();
    var alarm = Date.parse('05 Jan 2020 00:50:00 GMT')
    console.log(now);
    console.log(alarm);
    console.log(alarm - now)

    return (
      <View style={styles.container}>
        <Text>Time</Text>
      </View>
    );
  }
}


/*
var now = Date.now();
var alarm = Date.parse('05 Jan 2020 00:50:00 GMT')
console.log(now);
console.log(alarm);
console.log(alarm - now)
*/

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 20,
    color: '#251917',
    paddingHorizontal: 100
  },
  buttonContainer: {
    // backgroundColor: '#A5866C',
    // paddingVertical: 10,
    marginTop:10,
    paddingTop:25,
    paddingBottom:25,
    paddingHorizontal: 25,
    marginLeft:30,
    marginRight:30,
    marginBottom: 100,
    borderRadius:20,
    borderWidth: 1.5,
    borderColor: '#251917'
  },
  buttonText: {
    textAlign: 'center',
    color: '#251917',
    fontSize: 20
  }
});
