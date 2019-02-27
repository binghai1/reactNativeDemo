import React, { Component } from 'react'
import {Text,View,StyleSheet} from 'react-native'
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation'
import NavigationUtil from '../navigator/NavigationUtil'

export default class popular extends Component {
  render() {
    const TopBar=createAppContainer(createMaterialTopTabNavigator({
      FristPage:{
        screen:TopSelectBar,
        navigationOptions:{
          title:"page1"
        }
      },
      SecondPage:{
        screen:TopSelectBar,
        navigationOptions:{
          title:"page2"
        }
     
    }}))
    return (
      <View style={{flex:1}}>
        <TopBar/>
        <Text onPress={()=>{
            NavigationUtil.goPage("detail")
        }}>跳转详情页面</Text>
      </View>
    )
  }
}
class TopSelectBar extends Component{
    render(){
      const {tabLabel}=this.props
      return (
        <Text>{tabLabel}</Text>
      )
    }
}
const styles=StyleSheet.create({
    center:{
        alignItems:"center"
    }
})
