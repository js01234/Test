import React, { Component } from 'react'
import { AsyncStorage, Text, StatusBar, View, Image, StyleSheet, Alert, FlatList } from 'react-native'
import Header from './Header'
import Flatlist from './Flatlist'

export default class DrawingScreen extends Component {







    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#feba00" translucent={true} />
                <Header Navigation={this.props.navigation} />


                <Flatlist Navigation={this.props.navigation} />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 8,
        width: '100%',
    },
})