import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';

const TicketDesign = () => {
    const { container, TextStyle } = styles;
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         userId: '',
    //     }
    //     this._retrieveData()
    // }

    // _retrieveData = async () => {
    //     console.log("Retrieveing in Work Categity Screen")
    //     try {
    //         const value = await AsyncStorage.getItem('Hello');
    //         if (value !== null) {
    //             // We have data!!
    //             this.setState({ userId: value })
    //             console.log("onretrieveing value:-" + value)
    //             // Alert.alert(value)

    //         }
    //     } catch (error) {
    //         Alert.alert("error = " + error)
    //         console.log("error" + error)
    //         // Error retrieving data
    //     }
    // }


    return (
        <View style={container}>
            <ImageBackground
                style={{ width: '100%', height: 150 }}
                source={require('../../assets/Images/background.png')}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={TextStyle}>Hi User !</Text>
                </View>
                <View style={{ flexDirection: 'row', }} >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <Image
                            style={{ height: 50, width: 50 }}
                            source={require('../../assets/icons/helmet.png')}
                        />
                    </View>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <Image
                            style={{ height: 50, width: 50 }}
                            source={require('../../assets/icons/helmet.png')}
                        />
                    </View>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <Image
                            style={{ height: 50, width: 50 }}
                            source={require('../../assets/icons/helmet.png')}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', }} >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 27 }}>
                        <Text
                            style={{ alignSelf: 'stretch' }}>     New </Text>
                        <Text
                            style={{ alignSelf: 'stretch' }}>   Tickets </Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}>
                        <Text
                            style={{ alignSelf: 'stretch' }}> Completed</Text>
                        <Text
                            style={{ alignSelf: 'stretch' }}>    Tickets</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 27 }}>
                        <Text
                            style={{ alignSelf: 'stretch' }}>    Started</Text>
                        <Text
                            style={{ alignSelf: 'stretch' }}>    Tickets</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = {
    container: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#feba00',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
    },
    TextStyle: {
        fontWeight: '600',
        fontSize: 15,
        marginLeft: 10,
        marginTop: 10,
        color: 'black'
    }
}
export default TicketDesign;