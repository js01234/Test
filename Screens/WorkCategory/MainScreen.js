import React, { Component } from 'react';
import { AsyncStorage, View, Text, TextInput, StatusBar, Image, StyleSheet, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import BottomTab from './Bottom_Tab'
import SearchView from './Search_View'
import Header from './Header'
import Flatlist from './Flatlist'



export default class WorkCategoryScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { state, navigate } = navigation;
        return {
            title: 'workscreen',
        };
    };


    render() {

        return (
            <View style={{ width: '100%', height: '100%' }}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#feba00" translucent={true} />

                <View style={{ flexDirection: 'column', flex: 1 }}>

                    <Header Navigation={this.props.navigation} />
                    <SearchView />

                    <Flatlist Navigation={this.props.navigation}/>

                    <BottomTab />

                </View>
            </View>
        );


    }
}



