import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Item } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.apiPrefix = 'https://api.spotify.com/v1';
    this.secret = 'BQCvtE7D-nNzvLUIxmZSCZAHwNxygn4yBBJw_TzHquDFvtAvXXOUvkwRqaBOpmcrLHKxQqafKBAH15xCPP-UYAsuRTU4IMh-xsk-eaY0YLUQdsSOs3oIBfTfRumd8pdrEiosi0t85EzOfg68EM04Lzr7wg';
    this.deviceID = 'N/A';
    this.deviceName = 'N/A';
    this.deviceType = 'N/A';
    this.devices = 'N/A';
    this.songTrack = 'N/A';
    this.songArtist = 'N/A';
    this.songImage = 'N/A';
    this.songUri = 'N/A';
    this.tracks = 'N/A';
    this.limit = 5;
    this.state = { text: '' };
  }

  pick_device(id, name, type)
  {
      this.deviceID = id;
      this.deviceName = name;
      this.deviceType = type;
      this.forceUpdate();
  }

  pick_song(track, artist, image, uri)
  {
      this.songTrack = track;
      this.songArtist = artist;
      this.songImage = image;
      this.songUri = uri;
      this.forceUpdate();
  }

  render_devices()
  {
    let props = this.devices;
    let array = [];

    if (typeof(props) === 'undefined' || props == null)
        return array;

    for(let i = 0; i < props.length; i++) {
      array.push(
         <Text>{props[i].name} ({props[i].type})</Text>
      );
      array.push(
        <Button
          onPress={() => {
            this.pick_device(props[i].id, props[i].name, props[i].type);
          }}
          title="Pick me"
        />
      );
    }
    return array;
  }

  render_tracks()
  {
    let props = this.tracks;
    let array = [];

    if (typeof(props) === 'undefined' || props == null)
        return array;

    for(let i = 0; i < props.items.length; i++) {
      let artist = props.items[i].artists[0].name;
      let image = props.items[i].album.images[0].url;
      let uri = props.items[i].uri;
      let track = props.items[i].name;
      array.push(
        <Image
          style={{width: 50, height: 50}}
          source={{uri: image}}
        />
      );
      array.push(
         <Text>{artist} - {track}</Text>
      );
      array.push(
        <Button
          onPress={() => {
            this.pick_song(track, artist, image, uri);
          }}
          title="Pick me"
        />
      );
    }
    return array;
  }

  find_devices()
  {
    this.deviceID = 'N/A';
    this.deviceName = 'N/A';
    this.deviceType = 'N/A';
    this.devices = 'N/A';
    const uri = `${this.apiPrefix}/me/player/devices`;
    return fetch(uri, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.secret}`,
      }
    }).then(res => { return res.json();
    }).then(data => {
      this.devices = data.devices;
      this.forceUpdate();
    })
  }

  play_track()
  {
    let req = `${this.apiPrefix}/me/player/play?device_id=${this.deviceID}`;
    return fetch(req, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${this.secret}`,
      },
      body: `{"uris": [\"${this.songUri}\"]}`
   }).then(res => {this.forceUpdate();})
 }

 find_tracks(limit, type, market, q)
 {
   this.songTrack = 'N/A';
   this.songArtist = 'N/A';
   this.songImage = 'N/A';
   this.songUri = 'N/A';
   this.tracks = 'N/A';
   const uri = `${this.apiPrefix}/search?type=track&limit=${limit}&type=${type}&market=${market}&q=${encodeURIComponent(q)}`;
   return fetch(uri, {
     method: 'GET',
     headers: {
       Authorization: `Bearer ${this.secret}`,
     }
   }).then(res => { return res.json();
   }).then(data => {
     this.tracks = data.tracks;
     this.forceUpdate();
   })
 }

 render() {
   if(this.deviceID == 'N/A')
   {
     if(this.devices != 'N/A')
     {
       let array = this.render_devices();
       return (
         <View style={styles.container}>
           <Text>Pick a device</Text>
           {array}
           <Button
             onPress={() => {
               this.find_devices();
             }}
             title="Find devices"
           />
         </View>
       );
     }
     else {
       return (
         <View style={styles.container}>
         <Text>No device found!</Text>
         <Button
           onPress={() => {
             this.find_devices();
           }}
           title="Find devices"
         />
         </View>
       );
     }
   }
   else if (this.songUri == 'N/A') {
     if(this.tracks == 'N/A')
     {
       return (
         <View style={styles.container}>
           <TextInput
             style={{height: 40, borderColor: 'gray', borderWidth: 1}}
             onChangeText={(text) => this.setState({text})}
             value={this.state.text}
           />
           <Button
             onPress={() => {
               this.find_tracks(this.limit, 'track', 'DK', this.state.text);
             }}
             title="Find song"
           />
         </View>
       );
     }
     else {
       let array = this.render_tracks();
       return (
         <View style={styles.container}>
         <Text>Pick a song</Text>
         {array}
         <Button
           onPress={() => {
             this.find_devices();
           }}
           title="Find devices"
         />
         <TextInput
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={(text) => this.setState({text})}
           value={this.state.text}
           />
         <Button
           onPress={() => {
             this.find_tracks(this.limit, 'track', 'DK', this.state.text);
           }}
           title="Find song"
         />
         </View>
       );
     }
   }
   else {
     return (
       <View style={styles.container}>
         <Text>{this.deviceName} ({this.deviceType})</Text>
         <TextInput
         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
         />
         <Button
           onPress={() => {
             this.find_tracks(this.limit, 'track', 'DK', this.state.text);
           }}
           title="Find song"
         />
         <Image
         style={{width: 50, height: 50}}
         source={{uri: this.songImage}}
         />
         <Text>{this.songArtist} - {this.songTrack}</Text>
         <Button
           onPress={() => {
             this.play_track();
           }}
           title="Play"
         />
       </View>
     );
   }
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
