import React, { Component } from 'react'
import {createStackNavigator
    ,createMaterialTopTabNavigator
    ,createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation'
import homePage from '../page/homePage'
import splashPage from '../page/splashPage'

const MainNavigator=createStackNavigator({
    home:{
        screen:homePage
    }
})
const splashNavigator=createStackNavigator({
  splash:{
      screen:splashPage
  }
})
export default createSwitchNavigator({
  main:MainNavigator,
  welcome:splashNavigator
})
