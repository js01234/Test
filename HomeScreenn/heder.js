import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import RnIcons from 'react-native-vector-icons/AntDesign';
import BellIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// const Header = (props) => {
class Header extends Component {
    constructor(props) {
        super(props);
    }
    // const { TextStyle, ViewStyle, textviewstyle } = styles;

    render() {

        return (
            <View style={styles.ViewStyle}>

                <View style={{ flex: 0.15, justifyContent: 'center', marginTop: Platform.OS === 'ios' ? '3.5%' : '0%' }}>
                    <TouchableOpacity
                        onPress={() => this.props.Navigation.toggleDrawer()}

                    >
                        <RnIcons
                            size={25}
                            name='bars'
                            color='#ffffff'
                            style={{ paddingLeft: 10 }}
                        />
                    </TouchableOpacity>
                </View>



                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: Platform.OS === 'ios' ? '3.5%' : '0%' }}>
                    <Text style={styles.TextStyle}>
                        Project
                </Text>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    ViewStyle: {
        marginTop: 23,
        alignSelf: 'center',
        backgroundColor: '#feba00',
        height: Platform.OS === 'ios' ? '11%' : '9%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.2,
        elevation: 2,
        flexDirection: 'row',
        position: 'relative'

    },
    TextStyle: {
        marginRight: 50,
        fontSize: 20,
        color: '#ffffff'
    },
});

export default Header;