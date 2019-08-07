import React, { Component } from 'react'
import { Text, View,StatusBar, StyleSheet, Image, TouchableOpacity, } from 'react-native'

export default class ThankYou extends Component {
  static navigationOptions = { header: null }

    render() {
        return (
            <View style={styles.main_View}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#feba00" translucent={true} />

                <Image
                    source={require('../../assets/WellcomeAssets/welcome.png')}
                    style={{ height: '40%', width: '80%', alignSelf: 'center' }} />

                <Text style={{ fontSize: 25, color: '#262c33', marginTop: 25, }}>
                    Thankyou for Signing up.
                </Text>

                <Text
                style={{fontSize:12,color:'#262c33',marginTop:10}}>
                Company Name is a construction management
                </Text>
                <Text
                style={{fontSize:12,color:'#262c33',}}>
                platform used by over 20,000+ projects
              
                </Text>
                <Text
                style={{fontSize:13,color:'#262c33',}}>
                worldwide.              
                </Text>
            <View style={{height:50,marginTop: 110,}}>
                <TouchableOpacity onPress={() => this.props.navigation.replace('home_screen')}>
                    <Text style={styles.signup_text}>Continue >></Text>
                </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_View: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
    },

    signup_text: {
        // marginTop: '30%',
        width: 280,
        height: '100%',
        fontWeight: '300',
        fontSize: 25,
        backgroundColor: '#feba00',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.5,
        elevation: 3,
    },
})