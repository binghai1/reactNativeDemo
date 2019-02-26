import React, { Component } from 'react'
import {Text,View,StyleSheet} from 'react-native'

export default class trending extends Component {
  render() {
    return (
      <View>
        <Text style={styles.center}>trending</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({
    center:{
        alignItems:"center"
    }
})
