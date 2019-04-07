import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Platform, Button, DatePickerIOS } from 'react-native';
import Time from './Time';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// export default class Alarm extends Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       headerTitle: <Text>Add Alarm</Text>,
//       ),
//     };
//   };
//
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Alarm Screen</Text>
//         <Text>Count: {this.state.count}</Text>
//       </View>
//     );
//   }
// }

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {chosenDate: new Date()};

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

  render() {
    return (
      <View style={styles.container}>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});



// export default LoginForm;

/*
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
*/
