import React, { Component } from 'react'
import {Text,View} from 'react-native'

export default class homePage extends Component {
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
