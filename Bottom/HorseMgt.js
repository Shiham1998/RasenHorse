import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HorseMgt = () => {
  return (
    <View style={styles.container} >
      <Text >HorseMgt</Text>
    </View>
  )
}

export default HorseMgt

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        color:'black'
    }
})