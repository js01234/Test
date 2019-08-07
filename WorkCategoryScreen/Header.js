import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Header extends Component {

  render() {
    return (
      <View style={{ flexDirection: 'row', width: '100%', height: 47, marginTop: 23, backgroundColor: '#feba00' }}>

        <View style={{ flex: 0.4, flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center' }}>
          <TouchableOpacity onPress={() => this.props.Navigation.toggleDrawer()}>
            {/* <Image style={{ width: 17, height: 17, tintColor: 'white' }} source={require('../../assets/icons/drawer_Icon.png')}></Image> */}
          </TouchableOpacity></View>

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{marginLeft:20, fontSize: 20, fontWeight: '500', color: 'white', alignSelf: 'center' }}>Test</Text>
        </View>

        <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center' }}>

          <TouchableOpacity onPress={() => this.props.Navigation.navigate('last_Screen')}>
            {/* <Image style={{ width: 20, height: 20, tintColor: 'white', marginLeft: 10 }} source={require('../../assets/icons/add.png')}></Image> */}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.Navigation.navigate('drawing_screen')}>
            {/* <Image style={{ width: 20, height: 20, tintColor: 'white', marginRight: 10 }} source={require('../../assets/icons/ruler.png')}></Image> */}
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}
