import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet, Image, TouchableOpacity, } from 'react-native'

export default class LoginSignUp extends Component {
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.main_View}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#feba00" translucent={true} />

                <View style={{ width: 270, height: 170, marginTop: 50 }}>
                    <Image style={styles.image} source={require('../../assets/WellcomeAssets/mapView.png')}></Image>
                </View>
                <Text style={{ fontSize: 30, fontWeight: '400', color: '#262c33', marginTop: 30, }} >Plan Viewing</Text>
                <Text style={{ fontSize: 12, color: '#262c33', marginTop: 5, }} >You now have your own drawings and files</Text>
                <Text style={{ fontSize: 12, color: '#262c33', }} >fingertips anytime, anywhere. never build  from</Text>
                <Text style={{ fontSize: 12, color: '#262c33', }} >outdated documents again.</Text>

                
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
})