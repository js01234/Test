import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class BottomTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      n2: 0,
      n3: 0,
    };
    this.handlerButtonOnClick = this.handlerButtonOnClick.bind(this);
    this.handlerButtonOnClick2 = this.handlerButtonOnClick2.bind(this);
    this.handlerButtonOnClick3 = this.handlerButtonOnClick3.bind(this);
  }

  handlerButtonOnClick() {
    this.setState({
      n: this.state.n + 1
    });
  }

  handlerButtonOnClick2() {
    this.setState({
      n2: this.state.n2 + 1
    });
  }

  handlerButtonOnClick3() {
    this.setState({
      n3: this.state.n3 + 1
    });
  }



  render() {
    var _style, _style2, _style3;
    if (this.state.n % 2 == 0) { _style = { backgroundColor: "#ced9d9", } }
    else { _style = {} }

    if (this.state.n2 % 2 == 0) { _style2 = { backgroundColor: "#ced9d9", } }
    else { _style2 = {} }

    if (this.state.n3 % 2 == 0) { _style3 = { backgroundColor: "#ced9d9", } }
    else { _style3 = {} }

    return (
      <View style={{ width: '100%', height: 55, }}>
        <View style={styles.tab_bar_View}>

          <TouchableOpacity style={[styles.tab__child_View, styles.tab__child_View_1, _style]} onPress={this.handlerButtonOnClick}>
            <View>
              <Image style={styles.tab_icon} source={require('../../assets/icons/circular-shape-silhouette.png')}></Image>
            </View></TouchableOpacity>

          <TouchableOpacity style={[styles.tab__child_View2, _style2]} onPress={this.handlerButtonOnClick2}>
            <View>
              <Image style={styles.tab_icon_red} source={require('../../assets/icons/caret-arrow-up.png')}></Image>
            </View></TouchableOpacity>

          <TouchableOpacity style={[styles.tab__child_View, styles.tab__child_View_3, _style3]} onPress={this.handlerButtonOnClick3}>
            <View>
              <Image style={styles.tab_icon} source={require('../../assets/icons/rounded-black-square-shape.png')}></Image>
            </View></TouchableOpacity>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tab_bar_View: {
    marginBottom: 10,
    width: '86%',
    height: 34,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',

  },
  tab__child_View2: {
    flex: 1,
    borderTopColor: '#ced9d9',
    borderTopWidth: 1,
    borderBottomColor: '#ced9d9',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab__child_View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab__child_View_1: {
    borderBottomLeftRadius: 14,
    borderTopLeftRadius: 14,
    borderColor: '#ced9d9',
    borderWidth: 1,
  },
  tab__child_View_3: {
    borderBottomRightRadius: 14,
    borderTopRightRadius: 14,
    borderColor: '#ced9d9',
    borderWidth: 1,

  },
  tab_icon: {
    width: 18,
    height: 18,
  },
  tab_icon_red: {
    width: 24,
    height: 24,
  },
})