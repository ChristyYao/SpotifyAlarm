import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Spotify Alarm</Text>
        </View>
        <View>
          <Text style={styles.subtitle}> By Christy, Christian, and Daniel</Text>
        </View>
      </View>
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
