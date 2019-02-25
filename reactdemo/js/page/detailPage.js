import React, { Component } from 'react'
import {Text,View,StyleSheet} from 'react-native'

export default class detailPage extends Component {
  render() {
    return (
      <View>
        <Text style={styles.center}>detailPage</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({
    center:{
        alignItems:"center"
    }
})
