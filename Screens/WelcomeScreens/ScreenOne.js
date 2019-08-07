import React, { Component } from 'react';
import { StatusBar, Text, View, ImageBackground, Image,  } from 'react-native';

class ScreenOne extends Component {

    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#feba00" translucent={true} />
                <ImageBackground
                    style={{ height: 400, width: '100%', flexDirection: 'column' }}
                    source={require('../../assets/WellcomeAssets/Group.png')}>
                    <Image
                        source={require('../../assets/WellcomeAssets/welcome.png')}
                        style={{ height: 200, width: 300, marginTop: 55, alignSelf: 'center' }} />
                    <Text style={{ marginTop: 25, fontSize: 25, color: '#262c33', alignSelf: 'center', padding: 10, fontWeight: '500' }}>
                        Welcome</Text>
                    <Text
                        style={{ fontSize: 13, color: '#262c33', alignSelf: 'center', marginLeft: 25, marginRight: 25 }}>
                        Company Name is a construction management</Text>
                    <Text
                        style={{ fontSize: 13, color: '#262c33', alignSelf: 'center', marginLeft: 30, marginRight: 30 }}>
                        platform used by over 20,000+ projects
                        </Text>
                    <Text
                        style={{ fontSize: 13, color: '#262c33', alignSelf: 'center', marginLeft: 30, marginRight: 30 }}>
                        worldwide.</Text>

                </ImageBackground>

            </View>

        );
    }
}


export default ScreenOne;