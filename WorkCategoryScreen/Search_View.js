import React, { Component } from 'react';
import { View, TextInput,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class SearchView extends Component {

  render() {
    return (
        <View style={styles.search_View}>
        <TextInput selectionColor='red' placeholder='Search by Title,Work,etc.' style={styles.search_text_input}></TextInput>
        <Icon name='search' size={20} style={styles.search_icon} color='black'></Icon>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    search_View: {
      width: '95%',
      height:48,
      marginBottom: 10,
      flexDirection: 'row',
      marginTop: 10,
      alignSelf: 'center', 
      borderRadius: 15,
      borderColor: 'transparent',
      borderWidth: 1,paddingTop:5,
      backgroundColor: '#F8E09F'     //fbeecc
    },
    search_text_input: {
      color: 'black',
      paddingLeft: 15,
      width: '85%',
      height: 40,
      fontSize: 15,
      alignSelf: 'center',
    },
    search_icon: {
      marginLeft: 8,
      marginTop: 4,
      width: '8%',
      height: 30,
      alignSelf: 'center',
    },
})