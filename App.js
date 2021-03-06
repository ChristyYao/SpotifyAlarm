import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Splash from './src/components/Splash/Splash';
import Login from './src/components/Login/Login';
import Alarm from './src/components/Alarm/Alarm';
import Add from './src/components/Alarm/Add';
import Spotify from './src/components/Alarm/Spotify';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions:
      {
        header: null,
      }
    },
    Add: {
      screen: Add,
      navigationOptions:
      {
        header: null,
      }
    },
    Alarm: {
      screen: Alarm,
      navigationOptions:
      {
        headerStyle: {
          backgroundColor: "transparent"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#fff",
          zIndex: 1,
          fontSize: 18,
          lineHeight: 23,
          fontFamily: "CircularStd-Bold"
        },
        headerTintColor: "#fff",
        animationEnabled: true
      }
    },
    Spotify: {
      screen: Spotify,
      navigationOptions:
      {
        header: null,
      }
    },
  },
    {
      initialRouteName: "Login",
      navigationOptions: {

      }
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
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
