import React, { Component } from 'react'
import {Text,View,StyleSheet} from 'react-native'
import navUtil from '../navigator/NavigationUtil'

export default class splashPage extends Component {
   componentDidMount(){
    this.timeid=setTimeout(() => {
      const {navigation}=this.props;
      navUtil.navToHome({navigation})
      }, 3000);
   }
   componentWillUnmount(){
     this.timeid&&clearTimeout(this.timeid)
   }
  render() {
    return (
      <View>
        <Text style={styles.center}>欢迎页</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({
    center:{
        alignItems:"center"
    }
})
