import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../Images/alarmClock.png')} />
          <Text style={styles.title}>Spotify Alarm</Text>
        </View>
        <View style={styles.formContainer}>
          <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onClick}>
            <Text style={styles.buttonText}>Login with Spotify</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

//() => this.props.navigation.navigate('Add')

onClick = () => {
  this.props.navigation.navigate('Main')
}

export default Login;

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    color: '#251917',
    fontSize: 20
  },
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
    width: 200,
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
  },
  buttonContainer: {
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
});