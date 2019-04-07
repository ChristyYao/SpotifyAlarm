import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class Alarm extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Text></Text>,
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Add')}
          title="+"
          color='#251917'
        />
      ),
    };
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Alarm Screen</Text>
      </View>
    );
  }
}

export default Alarm;

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
