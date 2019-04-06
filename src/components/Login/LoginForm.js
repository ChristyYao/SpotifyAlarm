import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TouchableHighlight} from 'react-native';
import Main from '../Main/Main';

export default class LoginForm extends Component {

  render() {
    return (
      <View style={styles.container}>
      
        <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onClick}>
          <Text style={styles.buttonText}>Login with Spotify</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onClick}>
          <Text style={styles.buttonText}>Test</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

onClick = () => {
  this.props.navigation.navigate(Main)
}

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
