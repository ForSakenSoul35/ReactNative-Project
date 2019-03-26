/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';



export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedTab:'home',
    };
  }

  render() {
    return (
      <View style={styles.container}>
         <TabNavigator style={styles.container}>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'home'}
              title="Home"
              selectedTitleStyle={{color: "#3496f0"}}
              renderIcon={() => <Image style={styles.image} source={require('./res/image/icon1.jpg')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'lightred'}]} source={require('./res/image/icon2.jpg')} />}
              badgeText="1"
              onPress={() => this.setState({selectedTab: 'home'})}>
              <View style={styles.page1}></View>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'profile'}
              title="Profile"
              selectedTitleStyle={{color: "#3496f0"}}
              renderIcon={() => <Image style={styles.image} source={require('./res/image/icon2.jpg')} />}
              renderSelectedIcon={() => <Image style={styles.image} source={require('./res/image/icon1.jpg')} />}
              onPress={() => this.setState({selectedTab: 'profile'})}>
              <View style={styles.page2}></View>
            </TabNavigator.Item>
          </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1:{
    flex:1,
    backgroundColor:'red'
  },
  page2:{
    flex:1,
    backgroundColor:'green'
  },
  image:{
    height:27,
    width:27
  }
});
