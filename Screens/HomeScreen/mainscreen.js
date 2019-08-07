import React, { Component } from 'react';
import {Alert, AsyncStorage, Platform, StyleSheet, StatusBar, Text, View } from 'react-native';
import Header from './heder';
import Ticketdesign from './ticketdesign';
import Projectdesign from './projectdesign';


export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      UserName: ''
    }
    //  this._retrieveData();
    // Alert.alert('HomeScreen')
    console.log('HomeScreen')
  }
  


  // _retrieveData = async () => {

  //   try {
  //     const value = await AsyncStorage.getItem('Hello');
  //     if (value !== null) {
  //       // We have data!!
  //       console.log('homescreen async storage    '+value)
  //       // this.setState({value})
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     // Error retrieving data
  //   }
  // }



  render() {
    // this._retrieveData();
    return (

      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#feba00" translucent={true} />

        <Header
          Navigation={this.props.navigation} />
        <Ticketdesign
          Navigation={this.props.navigation} />
        <Projectdesign
          Navigation={this.props.navigation} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
