import React, { Component } from 'react'
import {Text,View,StyleSheet} from 'react-native'
import popular from './popular'
import mine from './mine'
import trending from './trending'
import Favorite from './Favorite'
import {createAppContainer,createBottomTabNavigator} from 'react-navigation'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NavigationUtil from '../navigator/NavigationUtil';
export default class mainPage extends Component {
  _bottomBar(){
    return createAppContainer(createBottomTabNavigator({
      FavoritePage:{
        screen:Favorite,
        navigationOptions:{
          tabBarLabel:"首页",
          tabBarIcon:({tintColor,focused})=>(
            <Entypo name={'home'} size={24} style={{color:tintColor}}/>
          )
        }
      },
      popularPage:{
        screen:popular,
        navigationOptions:{
          tabBarLabel:"收藏",
          tabBarIcon:({tintColor,focusd})=>(
            <MaterialIcons name={'favorite'} size={24} style={{color:tintColor}}/>
          )
        }
      },
      trendingPage:{
        screen:trending,
        navigationOptions:{
          tabBarLabel:"最热",
          tabBarIcon:({tintColor,focusd})=>(
            <MaterialIcons name={'whatshot'} size={24} style={{color:tintColor}}/>
          )
        }
      },
      minePage:{
        screen:mine,
        navigationOptions:{
          tabBarLabel:"我的",
          tabBarIcon:({tintColor,focused})=>(
            <Entypo name={'user'} size={24} style={{color:tintColor}}/>
          )
          
        }
      }
      

    }))
  }
  render() {
    NavigationUtil.navigation=this.props.navigation
    const Tab=this._bottomBar()
    return  (
      <Tab/>
    )
  
  }
}
const styles=StyleSheet.create({
    center:{
        alignItems:"center"
    }
})
