import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Platform, Button, Header } from 'react-native';
import Time from './Time';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Alarm extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Text>Alarm</Text>,
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+"
          color='#251917'
        />
      ),
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Alarm Screen</Text>
        <Text>Count: {this.state.count}</Text>
      </View>
    );
  }
}

// export default LoginForm;

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
