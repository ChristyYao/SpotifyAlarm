import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Item, ScrollView, DatePickerIOS } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.apiPrefix = 'https://api.spotify.com/v1';
    this.secret = 'BQCCs7OQ1pIqersls7fhXt1nrLNsbEUyfQhq_TEuw-8mct_vB2p1u7Yomya6Kmq1bJGkQd6tv19c-s_lg32owxIRILN9NRhtXiNHFscS0KoTF78sqnQWvGCt4diXXf9FWKhKBqNA0cFmfqORBMOPHVsiss4'
            ;
    this.deviceID = 'N/A';
    this.deviceName = 'N/A';
    this.deviceType = 'N/A';
    this.devices = 'N/A';
    this.songTrack = 'N/A';
    this.songArtist = 'N/A';
    this.songImage = 'N/A';
    this.songUri = 'N/A';
    this.tracks = 'N/A';
    this.limit = 20;
    this.state = { text: '' , chosenDate: new Date()};

    this.stateDate = {chosenDate: new Date()};
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
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
        <View style={styles.songContainer}>
        </View>
      );
      array.push(
        <Image
          style={{width: 50, height: 50}}
          source={{uri: image}}
        />,
        <Text>{artist} - {track}</Text>,
        <Button
          onPress={() => {
            this.pick_song(track, artist, image, uri);
          }}
          title="Pick me"
        />
      );
      // array.push(
      //    <Text>{artist} - {track}</Text>
      // );
      // array.push(
      //   <Button
      //     onPress={() => {
      //       this.pick_song(track, artist, image, uri);
      //     }}
      //     title="Pick me"
      //   />
      // );
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
             style={styles.textin}
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
         <ScrollView style={styles.scrollContainer}>
         <TextInput
           style={styles.textin}
           onChangeText={(text) => this.setState({text})}
           value={this.state.text}
           />
           <Button
             onPress={() => {
               this.find_tracks(this.limit, 'track', 'DK', this.state.text);
             }}
             title="Find song"
           />
        {array}
         <Button
           onPress={() => {
             this.find_devices();
           }}
           title="Find devices"
         />


         </ScrollView>
       );
     }
   }
   else {
     return (
       <View style={styles.container}>
        <View style={styles.dateContainer}>
         <DatePickerIOS
           date={this.state.chosenDate}
           onDateChange={this.setDate}
         />
         <Text>                                                                                       </Text>
        </View>
         <Text>{this.deviceName} ({this.deviceType})</Text>
         <Text> {console.log(this.state.chosenDate)} {console.log(Date.now())}
                {console.log(this.state.chosenDate - Date.now())} </Text>
         <TextInput
         style={styles.textin}
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
   // marginTop:10,
   paddingTop:25
 },
 scrollContainer: {
   flex: 1,
   backgroundColor: '#F1DFD7',
   // paddingTop: 100,
   // paddingVertical: 100
 },
 songContainer: {
   flex: 1,
   flexDirection: 'row'
 },
 dateContainer: {
   flex: 1,
   justifyContent: 'center',
   backgroundColor: '#F1DFD7',
   paddingTop: 20
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
 },
 textin: {
   marginTop:100,
   paddingTop:25,
   paddingBottom:25,
   paddingHorizontal: 25,
   marginLeft:30,
   marginRight:30,
   marginBottom: 30,
   borderRadius:20,
   borderWidth: 1.5,
   borderColor: '#251917'
 }
});
