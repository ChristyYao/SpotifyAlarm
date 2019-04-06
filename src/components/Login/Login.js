import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import StyleSheet from '../../Styles/Styles';
// import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginForm from './LoginForm';

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../Images/alarmClock.png')} />
          <Text style={styles.title}>Spotify Alarm App </Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1DFD7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#251917',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    width: 140,
    textAlign: 'center',
    opacity: 0.9
  },
  subtitle: {
    color: '#A5866C',
    fontWeight: '200',
    paddingBottom: 20
  },
  titleWrapper: {
    justifyContent: 'center',
    flex: 1
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  }
});