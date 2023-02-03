import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View style = {styles.loader}>
      <Text style = {styles.loaderText}>Loading...</Text>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    loader:{
        flex:1,
        justifyContent : "center",
        alignItems : "center",
        width : "100%",
        backgroundColor : "rgba(192, 240, 158, 0.2)",
    },
    loaderText:{
        fontWeight:"bold",
        fontSize : 40,
    }
})