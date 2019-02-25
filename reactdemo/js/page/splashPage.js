import React, { Component } from 'react'
import {Text,View} from 'react-native'

export default class splashPage extends Component {
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
