
// import React, { Component } from 'react';
// import { View, Text, AsyncStorage } from 'react-native';

// export default class mainscreen extends Component {


//   constructor(props) {
//     super(props);
//     this.state = { Key: 0, Value: 10 };
//     this._storeData()
//   }

//   _storeData = async () => {
//     // let myArray={ fName:'JASBIR',mName:'JaSbIr',lName:'jasbir'}
//     const key = 'key' + this.state.Key
//     const value = this.state.Value + ''
//     try {
//       // await AsyncStorage.setItem('Key1',JSON.stringify(myArray));
//       await AsyncStorage.setItem(key, value);

//     } catch (error) { } this._retrieveData()
//   };




//   _retrieveData = async () => {
//     const key = 'key' + this.state.Key
//     try {
//       const value = await AsyncStorage.getItem(key);
//       if (value !== null) {
//         let d = JSON.parse(value)
//         // We have data!!
//         console.log('async storage value  :=')
//         console.log('Key ==' + key + "       " + 'Value ==' + value)
//         this.setState({ Key: this.state.Key + 1, Value: this.state.Value + 1 })
//       }
//     } catch (error) { }
//   };


//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text onPress={this._storeData}> mainscreen </Text>
//       </View>
//     );
//   }
// }






























// import React, { Component } from 'react';
// import {
//   AppRegistry, FlatList, AsyncStorage,
//   StyleSheet, Text, View, Alert, TextInput
// } from 'react-native';

// export default class FlatListBasics extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       key: "before changing state",
//       description: 'before changing state',
//       i: -2,
//     }
//     // this._storeData()
//   }

//   renderSeparator = () => {
//     return (
//       <View
//         style={{
//           height: 1,
//           width: "100%",
//           backgroundColor: "#000",
//         }}
//       />
//     );
//   };



//   _storeData = async () => {
//     let myArray = this.state.data
//     console.log("Storing.....................")
//     try {
//       await AsyncStorage.setItem('Key1', JSON.stringify(myArray));
//       console.log("data saved in async storage")
//     } catch (error) {
//       console.log("error:-" + error)
//       // Error saving data
//     }
//     this._retrieveData()
//   };




//   _retrieveData = async () => {
//     console.log('retrieveing...................')
//     try {
//       const value = await AsyncStorage.getItem('Key1');

//       if (value !== null) {
//         let d = JSON.parse(value)
//         // We have data!!
//         console.log('async storage value  :=')
//         console.log(d)

//         console.log(d[this.state.i].key)
//         console.log(this.state.i)
//         // console.log(d.lName)
//       }
//     } catch (error) {
//       console.log("error:-" + error)
//       // Error retrieving data
//     }
//   };


//   onchengetextkey = (text) => {
//     this.setState({ key: text })
//   }
//   onchengetextDes = (text) => {
//     this.setState({ description: text })
//   }


//   getListViewItem = (item) => {

//     this.setState({
//       data: [...this.state.data, { key: this.state.key, description: this.state.description }],
//       i: this.state.i + 1
//     })
//     this._storeData()
//     // Alert.alert(item.description);  

//   }

//   render() {

//     return (

//       <View style={styles.container}>
//         <View style={{ flexDirection: 'row', height: 100, width: '100%', }}>


//           <TextInput onChangeText={(text) => this.onchengetextkey(text)} underlineColorAndroid='black' placeholder='Enter Key' style={{ flex: 1, height: '100%', flex: 1, }}></TextInput>
//           <TextInput onChangeText={(text) => this.onchengetextDes(text)} underlineColorAndroid='black' placeholder='Enter Description' style={{ flex: 1, height: '100%', flex: 1, }}></TextInput>




//         </View>
//         <Text onPress={this.getListViewItem} style={{ marginTop: 20, marginBottom: 30, justifyContent: 'center', alignItems: 'center', fontSize: 18, alignSelf: 'center' }}>Add Values In List</Text>
//         <FlatList
//           data={this.state.data}
//           renderItem={({ item }) =>
//             <View style={{ flexDirection: 'column' }}>
//               <Text style={styles.item}>{item.key}</Text>

//               <Text style={styles.item}>{item.description}</Text>
//             </View>}
//           ItemSeparatorComponent={this.renderSeparator}
//         />

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column'
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })






















import React, { Component } from 'react';
import { Alert, AsyncStorage, Platform, StyleSheet, StatusBar, Text, View } from 'react-native';
import Header from './heder';
import Ticketdesign from './ticketdesign';
import Projectdesign from './projectdesign';


export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      UserName: ''
    }
    //  this._retrieveData();
    // Alert.alert('HomeScreen')
    console.log('HomeScreen')
  }



  // _retrieveData = async () => {

  //   try {
  //     const value = await AsyncStorage.getItem('Hello');
  //     if (value !== null) {
  //       // We have data!!
  //       console.log('homescreen async storage    '+value)
  //       // this.setState({value})
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     // Error retrieving data
  //   }
  // }



  render() {
    // this._retrieveData();
    return (

      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#feba00" translucent={true} />

        <Header
          Navigation={this.props.navigation} />
        <Ticketdesign
          Navigation={this.props.navigation} />
        <Projectdesign
          Navigation={this.props.navigation} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
