import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/components/Splash/Splash';
import Login from './src/components/Login/Login';

export default class App extends React.Component {
  render() {
    return (
      // <Splash/>
      <Login/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1DFD7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#251917',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#A5866C',
    fontWeight: '200',
    paddingBottom: 20
  },
  titleWrapper: {
    justifyContent: 'center',
    flex: 1
  }
});
