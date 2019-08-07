import React, { Component } from 'react'
import {  createAppContainer, createStackNavigator } from 'react-navigation';
// import HomeScreen from './HomeScreenn/mainscreen'
// import WorkCategoryScreen from './WorkCategoryScreen/MainScreen'
import HomeScreen from './Screens/HomeScreen/mainscreen'
import ProjectDrawing from './Screens/ProjectDrawing/DrawingScreen'
import WorkCategory from './Screens/WorkCategory/MainScreen'
const AppNavigator = createStackNavigator({
  
  home_screen: {
      screen: HomeScreen,
    },
    work_screen: {
      screen: WorkCategory,
    },
    drawing_screen: {
      screen: ProjectDrawing,
    },
  
  }, {
  initialRouteName: 'home_screen',
  headerMode: 'none',
});






export default Navigation = createAppContainer(AppNavigator);


