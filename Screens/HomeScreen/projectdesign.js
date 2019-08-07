





import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, FlatList, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import VIcon from 'react-native-vector-icons/AntDesign';
import IIcon from 'react-native-vector-icons/Ionicons'
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import { HeaderStyleInterpolator } from 'react-navigation';


class ProjectDesign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cloud: true,
            device: false,
            projectsData: [],
            userid: "",
            prjId: '',
            cloudPrjid: '',
            indicatorVisible: true,
            CloudProject: [],
            TicketsData: [],
            DrawingData: [],
            savedValue: '',
            projectiid: '',
            device1: false,
            drawing: []
        };
        // this._retrieveData()
        this.onLogin()
        this.handlerButtonOnClick1 = this.handlerButtonOnClick1.bind(this);
        this.handlerButtonOnClick2 = this.handlerButtonOnClick2.bind(this);
    }


    // _retrieveData = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('Hello');
    //         if (value !== null) {
    //             // We have data!!
    //             this.setState({ userid: value })
    //             console.log(" onretrieveing value:-" + value)
    //             // this.setState({value})
    //             this.onLogin();
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         // Error retrieving data
    //     }
    //     this._retrieveDatainhomeScreen13()
    // }


    // _retrieveDatainhomeScreen13 = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('CloudProject');
    //         if (value !== null) {
    //             // We have data!!
    //             let d = JSON.parse(value)
    //             this.setState({ CloudProject: d })
    //         }
    //     } catch (error) {
    //         console.log("error" + error)
    //     }
    // }
























    onLogin = () => {
        console.log("Login Working")
        var params = {
            "userId": 76,
        };
        console.log("onlogin userid:-" + this.state.userid)
        var formData = new FormData();

        for (var k in params) {
            formData.append(k, params[k]);
        }

        var request = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            body: formData
        };

        fetch('http://anythinginfotech.in/Gouravdata/Edcontrol/index.php/GetProjects', request)
            .then((response) =>
                this.myfun(response.json(), response))
            .catch((error) => {
                console.error(error, 'error');
            });
    }

    myfun = (res, scndres) => {
        res.then((result) => {
            console.log('ews', result)
            this.setState({
                projectsData: result.projects,
                indicatorVisible: false
            })
            // this._storeData();
        })
    }

    // _storeData = async () => {
    //     console.log('Updating Async storage in home screen')
    //     const userId = JSON.stringify(this.state.projectsData);
    //     try {
    //         await AsyncStorage.setItem('Projects', userId);
    //         // Alert.alert('data saved')
    //     }
    //     catch (error) {
    //         console.log('error')
    //         // Error saving data
    //     }
    // }








    handlerButtonOnClick1() {
        this.setState({
            device: true,
            cloud: false,
        });
    }
    handlerButtonOnClick2() {
        this.setState({
            cloud: true,
            device: false,
        });
    }

    clearAsyncStorage = async () => {
        AsyncStorage.clear();
        console.log('*****************Async Storage cleared!!!!!')
    }













    _hahahaha = async (item) => {
        console.log('_hahahaha')
        this.setState({ prjId: item.projectId, })
        const key = 'key' + item.projectId
        console.log(key)
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                // We have data!!
                this.setState({ savedValue: value })
            }
        } catch (error) { console.log("error" + error) }
        this._hahahaha12(item)
    }
    _hahahaha12 = async (item) => {
        console.log('_hahahaha12')
        if (this.state.savedValue == this.state.prjId) {
            this.setState({ device1: true })
            console.log("dismiss")
            this._flatlistItemClick1(item)
        }
        else {
            {
                console.log("add")
                this._hahahaha1(item)
            }
        }
    }

    _hahahaha1 = async (item) => {
        console.log('_hahahaha1')
        const key = 'key' + item.projectId
        const device1 = 'device1' + item.projectId
        try {
            await AsyncStorage.setItem(key, item.projectId);
        }
        catch (error) { console.log('error') }
        this._flatlistItemClick1(item)
    }


















    _flatlistItemClick1 = (item) => {
        console.log('_flatlistItemClick1')
        this.setState({
            indicatorVisible: true,
            prjId: item.projectId,
            // CloudProject: [...this.state.CloudProject, item]
        })
        console.log(this.state.prjId)
        // const key = 'key' + this.state.prjId
        const CloudData = this.state.CloudProject;
        try {
            AsyncStorage.setItem('CloudProject', JSON.stringify(CloudData))
            AsyncStorage.setItem('prjId', this.state.prjId);
            // console.log(key)
        }
        catch (error) {
            console.log('error' + error)
        }
        this._retrieveDatainhomeScreen1(item)
    }
    // _flatlistItemClick13 = (item) => {
    //     console.log('_flatlistItemClick13')
    //     this.setState({
    //         indicatorVisible: true,
    //         prjId: item.projectId,
    //     })
    //     console.log(this.state.prjId)
    //     // const key = 'key' + this.state.prjId
    //     const CloudData = this.state.CloudProject;
    //     try {
    //         AsyncStorage.setItem('CloudProject', JSON.stringify(CloudData))
    //         AsyncStorage.setItem('prjId', this.state.prjId);
    //         // console.log(key)
    //     }
    //     catch (error) {
    //         console.log('error' + error)

    //     }
    //     this._retrieveDatainhomeScreen1()
    // }

    _retrieveDatainhomeScreen1 = async (item) => {
        const key = 'key' + this.state.prjId
        try {
            const value = await AsyncStorage.getItem('CloudProject');
            if (value !== null) {
                // We have data!!
                let d = JSON.parse(value)
            }
        } catch (error) {
            console.log("error" + error)
        }
        this._retrieveDatainhomeScreen12(item)
    }



    _retrieveDatainhomeScreen12 = async (item) => {
        try {
            const value = await AsyncStorage.getItem('prjId');
            if (value !== null) {

            }
        } catch (error) {
            console.log("error" + error)
        }
        this.getWCandD(item)
        // this.setState({ indicatorVisible: false })
        // this._storeDataofWCScreen()
    }



    getWCandD = (item) => {
        console.log("get WCandD Working")
        var params = {
            "projectId": this.state.prjId,
            "lastRowId": 1,
        };
        console.log("prj= " + this.state.prjId)
        var formData = new FormData();

        for (var k in params) {
            formData.append(k, params[k]);
        }

        var request = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            body: formData
        };

        fetch('http://anythinginfotech.in/Gouravdata/Edcontrol/index.php/GetTicketsList', request)
            .then((response) =>
                this.myfun1(response.json(), response, item))
            .catch((error) => {
                console.error(error, 'error');
            });
    }


    myfun1 = (res, scndres, item) => {
        res.then((result) => {
            console.log('ews', result)
            if (result.Status == 1 && this.state.device1 == false) {
                this.setState({
                    TicketsData: result.tickets,
                    DrawingData: result.drawingList,
                    CloudProject: [...this.state.CloudProject, item],
                    device1: true
                })
                this._storeDataofWCScreen()
            }
            else if (result.Status == 1 && this.state.device1 == true) {
                this.setState({
                    TicketsData: result.tickets,
                    DrawingData: result.drawingList,
                })
                this._storeDataofWCScreen()
            }
            else {
                Alert.alert('No Data Found')
                this.setState({ indicatorVisible: false })
            }

        })
    }








    _storeDataofWCScreen = async () => {
        const key = 'Ticket' + this.state.prjId
        const tickets = JSON.stringify(this.state.TicketsData);
        console.log('SAVING TICKET' + this.state.TicketsData)
        // console.log(tickets)
        // console.log('*****************'+key)
        try {
            await AsyncStorage.setItem('Hhhh', tickets);
            console.log('Data Saved in Async for Wc Screen')
            // Alert.alert('data saved')
        }
        catch (error) {
            console.log('error   ' + error)
            // Error saving data
        }
        this._storeDataofDrawingScreen()
    }







    _storeDataofDrawingScreen = async () => {
        const key = 'Drawing' + this.state.prjId
        console.log('*****************' + key)
        const drawing = JSON.stringify(this.state.DrawingData);
        console.log('SAVING DRAWING' + this.state.DrawingData)
        try {
            await AsyncStorage.setItem("Drawing", drawing);
            console.log('Data Saved in Async storage for Drawing Screen')
            //  Alert.alert('data saved')
        }
        catch (error) {
            console.log('error   ' + error)
            // Error saving data
        }
        this.setState({ indicatorVisible: false })
        // this._retrieveDatainDrawingScreen()
        this._retrieveDataWC()
    }


    _retrieveDataWC = async () => {
        try {
            const value = await AsyncStorage.getItem('Hhhh')
            if (value !== null) {
                let d = JSON.parse(value)
                console.log(JSON.parse(value))

                // We have data!!
                // this.setState({ ticket: d})
            }
        } catch (error) {
            // Alert.alert("error")
            console.log("error" + error)
            // Error retrieving data
        }
        this._retrieveDataDS()
    }




    _retrieveDataDS = async () => {
        console.log("_retrieveDataDS")
        try {
            const value = await AsyncStorage.getItem("Drawing")
            if (value !== null) {
                let d = JSON.parse(value)
                console.log(JSON.parse(value))
                // We have data!!
                // this.setState({ drawing: d })
            }
        } catch (error) {
            // Alert.alert("error")
            console.log("error" + error)
            // Error retrieving data
        }
    }






































    _flatlistItemClick2 = (item) => {
        this.setState({ cloudPrjid: item.projectId, })
        // console.log("******************"+this.state.cloudPrjid+"********************"+item.projectId)
        const value = 'Ticket' + item.projectId
        const valueD = 'Drawing' + item.projectId
        try {
            AsyncStorage.setItem('TicketId', value);
            AsyncStorage.setItem('DrawingId', valueD);
            // console.log(value)
        }
        catch (error) { console.log('error' + error) }
        this.props.Navigation.navigate('work_screen')
    }
















    render() {
        const { indicatorVisible, cloud, device } = this.state;
        var _style1, _style2;
        if (device == true && cloud == false) {
            _style1 = { backgroundColor: "#feba00", borderRadius: 15 };
            _style2 = {}
        }
        else {
            _style1 = {};
            _style2 = { backgroundColor: "#feba00", borderRadius: 15 }
        }


        if (indicatorVisible == false && cloud == true) {

            return (
                <View style={{ flexDirection: 'column' }}>

                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ flex: 1, }}>
                            <Text onPress={this.clearAsyncStorage} style={{ color: 'black', fontSize: 15, padding: 10, marginLeft: 11 }}>Projects</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <View style={{ padding: 10, marginLeft: 30, }}>
                                <TouchableOpacity onPress={this.handlerButtonOnClick1}>
                                    <View style={[styles.button, _style1,]}>
                                        <Text style={{ alignSelf: 'center', color: 'black', fontSize: 13, marginBottom: 3 }}>Device</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ padding: 11, }}>
                                <TouchableOpacity onPress={this.handlerButtonOnClick2}>
                                    <View style={[styles.button, _style2]}>
                                        <Text style={{ alignSelf: 'center', color: 'black', fontSize: 13, marginBottom: 4 }}>Cloud</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>


                    <View style={{ height: '70.5%' }}>
                        <FlatList
                            data={this.state.projectsData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) =>

                                <View style={styles.container}>

                                    <TouchableOpacity onPress={() => this._hahahaha(item)}>
                                        <View>
                                            <ImageBackground style={styles.imagestyle}>
                                                <IIcon
                                                    name='md-download'
                                                    size={40}
                                                    color='black'
                                                />

                                            </ImageBackground>
                                        </View>
                                    </TouchableOpacity>

                                    <View style={{ flexDirection: 'column', flex: 1 }}>
                                        <Text style={{
                                            marginLeft: 10,
                                            marginTop: 5,
                                            fontSize: 18,
                                            color: 'black',
                                            marginBottom: 2

                                        }}>{item.name}
                                        </Text>
                                        <Text
                                            numberOfLines={3}
                                            ellipsizeMode='tail'
                                            style={{ marginLeft: 10, marginTop: 1, marginLeft: 10, fontSize: 9, color: 'black' }}>{item.description}
                                        </Text>
                                    </View>
                                </View>

                            } />
                    </View>
                </View>

            )
        }
        else if (indicatorVisible == false && cloud == false) {
            return (

                <View style={{ flexDirection: 'column' }}>

                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ flex: 1, }}>
                            <Text style={{ color: 'black', fontSize: 15, padding: 10, marginLeft: 11 }}>Projects</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <View style={{ padding: 10, marginLeft: 30, }}>
                                <TouchableOpacity onPress={this.handlerButtonOnClick1}>
                                    <View style={[styles.button, _style1,]}>
                                        <Text style={{ alignSelf: 'center', color: 'black', fontSize: 13, marginBottom: 3 }}>Device</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ padding: 11, }}>
                                <TouchableOpacity onPress={this.handlerButtonOnClick2}>
                                    <View style={[styles.button, _style2]}>
                                        <Text style={{ alignSelf: 'center', color: 'black', fontSize: 13, marginBottom: 4 }}>Cloud</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>




                    <View style={{ height: '70.5%' }}>
                        <FlatList
                            data={this.state.CloudProject}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) =>

                                <View style={styles.container}>

                                    <TouchableOpacity onPress={() => this._flatlistItemClick2(item)}>
                                        <View>
                                            <ImageBackground style={styles.imagestyle}>
                                                <VIcon name='check' size={30} color='green' />
                                            </ImageBackground>
                                        </View>
                                    </TouchableOpacity>

                                    <View style={{ flexDirection: 'column', flex: 1 }}>
                                        <Text style={{
                                            marginLeft: 10,
                                            marginTop: 5,
                                            fontSize: 18,
                                            color: 'black',
                                            marginBottom: 2

                                        }}>{item.name}
                                        </Text>
                                        <Text
                                            numberOfLines={3}
                                            ellipsizeMode='tail'
                                            style={{ marginLeft: 10, marginTop: 1, marginLeft: 10, fontSize: 9, color: 'black' }}>{item.description}
                                        </Text>
                                        <Text
                                            numberOfLines={3}
                                            ellipsizeMode='tail'
                                            style={{ marginLeft: 10, marginTop: 1, marginLeft: 10, fontSize: 9, color: 'black' }}>CreateDate: {item.createDate}
                                        </Text>
                                    </View>
                                </View>

                            } />
                    </View>
                </View>
            )
        }

        else {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <ActivityIndicator size={35} animating={true} color='#feba00' />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 10,
        borderRadius: 10,
        borderColor: '#f3e5bf',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#f3e5bf',
        flexDirection: 'row'
    },
    imagestyle: {
        flex: 0.5,
        height: 80,
        width: 80,
        backgroundColor: '#feba00',
        borderWidth: 10,
        borderRadius: 10,
        borderColor: '#feba00',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        height: 30,
        width: 50,
    },
});

export default ProjectDesign;






// n2: 0,

// this.handlerButtonOnClick2 = this.handlerButtonOnClick2.bind(this);


 // handlerButtonOnClick2() {
    //     this.setState({
    //         n2: this.state.n2 + 1
    //     });
    // }


     // if (this.state.n2 % 2 == 0) {
        //     // _style2 = {}
        //     // _style1 = { backgroundColor: "#f3e5bf", };
        // }
        // else {

        //     _style2 = { backgroundColor: "#f3e5bf", };
        //     _style1 = {};
        // }




























































        // onLogin = () => {
        //     console.log("Login Working")
        //     var params = {
        //         "userId": this.state.userid,
        //     };
        //     console.log("onlogin userid:-" + this.state.userid)
        //     var formData = new FormData();

        //     for (var k in params) {
        //         formData.append(k, params[k]);
        //     }

        //     var request = {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'multipart/form-data',
        //         },
        //         body: formData
        //     };

        //     fetch('http://anythinginfotech.in/Gouravdata/Edcontrol/index.php/GetProjects', request)
        //         .then((response) =>
        //             this.myfun(response.json(), response))
        //         .catch((error) => {
        //             console.error(error, 'error');
        //         });
        // }


        // myfun = (res, scndres) => {
        //     res.then((result) => {
        //         console.log('ews', result)
        //         this.setState({
        //             projectsData: result.projects,
        //             indicatorVisible: false
        //         })
        //         this._storeData();
        //     })
        // }


        // _storeData = async () => {
        //     console.log('Updating Async storage in home screen')
        //     const userId = JSON.stringify(this.state.projectsData);
        //     try {
        //         await AsyncStorage.setItem('Projects', userId);
        //         // Alert.alert('data saved')
        //     }
        //     catch (error) {
        //         console.log('error')
        //         // Error saving data
        //     }
        // }

























        // handlerButtonOnClick1() {
        //     this.setState({
        //         device: true,
        //         cloud: false,
        //     });
        // }
        // handlerButtonOnClick2() {
        //     this.setState({
        //         cloud: true,
        //         device: false,
        //     });
        // }
















        // _flatlistItemClick = (item) => {
        //     this.setState({ indicatorVisible: true })
        //     // this.setState({prjId:item.projectId})
        //     const userId = item.projectId;
        //     try {
        //         AsyncStorage.setItem('prjId', userId);
        //         // Alert.alert(userId)
        //         // Alert.alert('data saved')
        //     }
        //     catch (error) {
        //         console.log('error')
        //         // Error saving data
        //     }
        //     this._retrieveDatainhomeScreen1()
        //     // this.props.Navigation.navigate('work_screen')
        // }






        // _retrieveDatainhomeScreen1 = async () => {
        //     console.log("Retrieveing in Work Categity Screen")
        //     try {
        //         const value = await AsyncStorage.getItem('prjId');
        //         if (value !== null) {
        //             // We have data!!
        //             this.setState({ prjId: value })
        //             console.log("onretrieveing value:-" + value)
        //             // Alert.alert(value)
        //             // this.setState({value})
        //         }
        //     } catch (error) {
        //         Alert.alert("error")
        //         console.log("error" + error)
        //         // Error retrieving data
        //     }
        //     this.getWCandD();
        // }



        // getWCandD = () => {
        //     console.log("get WCandD Working")
        //     var params = {
        //         "projectId": this.state.prjId,
        //         "lastRowId": 1,
        //     };
        //     console.log("prj= " + this.state.prjId)
        //     var formData = new FormData();

        //     for (var k in params) {
        //         formData.append(k, params[k]);
        //     }

        //     var request = {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'multipart/form-data',
        //         },
        //         body: formData
        //     };

        //     fetch('http://anythinginfotech.in/Gouravdata/Edcontrol/index.php/GetTicketsList', request)
        //         .then((response) =>
        //             this.myfun1(response.json(), response))
        //         .catch((error) => {
        //             console.error(error, 'error');
        //         });
        // }


        // myfun1 = (res, scndres) => {
        //     res.then((result) => {
        //         console.log('ews', result)
        //         if (result.Status == 1) {
        //             this.setState({
        //                 TicketsData: result.tickets,
        //                 DrawingData: result.drawingList,
        //             })
        //             this._storeDataofWCScreen()
        //         }
        //         else {
        //             Alert.alert('No Data Found')
        //             this.setState({ indicatorVisible: false })
        //         }

        //     })
        // }















        // _storeDataofWCScreen = async () => {


        //     const tickets = JSON.stringify(this.state.TicketsData);
        //     try {
        //         await AsyncStorage.setItem('Ticket', tickets);
        //         console.log('Data Saved in Async for Wc Screen')
        //         // Alert.alert('data saved')
        //     }
        //     catch (error) {
        //         console.log('error   ' + error)
        //         // Error saving data
        //     }
        //     this._storeDataofDrawingScreen()
        // }

        // _storeDataofDrawingScreen = async () => {

        //     const drawing = JSON.stringify(this.state.DrawingData);
        //     try {
        //         await AsyncStorage.setItem('Drawing', drawing);
        //         console.log('Data Saved in Async storage for Drawing Screen')
        //         //  Alert.alert('data saved')
        //     }
        //     catch (error) {
        //         console.log('error   ' + error)
        //         // Error saving data
        //     }
        //     this.props.Navigation.navigate('work_screen')
        //     this.setState({ indicatorVisible: false })
        // }