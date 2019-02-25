import React, { Component } from 'react'
import {createStackNavigator
    ,createMaterialTopTabNavigator
    ,createBottomTabNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation'
import homePage from '../page/homePage'
import splashPage from '../page/splashPage'
import detailPage from '../page/detailPage'

const MainNavigator=createStackNavigator({
    home:{
        screen:homePage,
        navigationOptions:{
            header:null
        }
    },
    detail:{
        screen:detailPage,
        navigationOptions:{
            header:null
        }
    }
})
const splashNavigator=createStackNavigator({
  splash:{
      screen:splashPage,
      navigationOptions:{
        header:null
    }
  }
})
export default createAppContainer(
    createSwitchNavigator({
        init:splashNavigator,
        main:MainNavigator
      }),{
          navigationOptions:{
        header:null
    }}
)
