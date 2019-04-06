import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Main</Text>
      </View>
    );
  }
}

export default Main;

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
