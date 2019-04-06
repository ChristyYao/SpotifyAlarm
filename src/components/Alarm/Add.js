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

/*
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
*/

//This is an example code to get DatePicker//
// import React, { Component } from 'react';
//import react in our code.
// import { View, StyleSheet } from 'react-native';
//import all the components we are going to use.
import DatePicker from 'react-native-datepicker';
//import DatePicker from the package we installed

export default class Add extends Component {
  constructor(props) {
    super(props);
    //set value in state for initial date
    this.state = { date: '15-05-2018' };
  }

  render() {
    return (
      <View style={styles.container}>
        <DatePicker
          style={{ width: 200 }}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={date => {
            this.setState({ date: date });
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 16,
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
