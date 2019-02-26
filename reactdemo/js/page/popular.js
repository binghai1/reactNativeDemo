import React, { Component } from 'react'
import {Text,View,StyleSheet} from 'react-native'


export default class popular extends Component {
  render() {
    return (
      <View>
        <Text style={styles.center}>homePage</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({
    center:{
        alignItems:"center"
    }
})
