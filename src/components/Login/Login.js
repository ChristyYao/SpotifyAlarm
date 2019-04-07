import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, WebView } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class Login extends React.Component {
  
  constructor () {
    super();
    this.state = { showWebView:false };
  } 

  showSpotifyWebView = (state) => {
    this.setState( { showWebView: state });
  }

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
          onPress={() => this.showSpotifyWebView(!this.state.showWebView) }>
            <Text style={styles.buttonText}>Login with Spotify</Text>
          </TouchableOpacity>
        </View>
        { this.state.showWebView && 
        <WebView
          source={{uri: 'https://accounts.spotify.com/authorize?response_type=code&client_id=b68846ed8866426d9b9d7c591d758171&scope=user-read-private user-read-email&redirect_uri=http://blank.org'}}
          style={styles.web}
          onNavigationStateChange={(event) => {
            if (event.url.match('http://blank.org')) {
              this.showSpotifyWebView(false);
              this.props.navigation.navigate('Alarm')
            }
          }}
        />
        }
      </View>
    );
  }
}

//() => this.props.navigation.navigate('Add')

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
  web: {
    marginTop: 20,
    maxHeight: screenHeight,
    width: screenWidth,
    flex: 1
  }
});