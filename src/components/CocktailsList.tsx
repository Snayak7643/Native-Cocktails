import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const CocktailsList = () => {
  return (
    <View style = {styles.container}>
      <FlatList data={[0,1,2,3,4,5]} renderItem = {({item})=> <Card key={item}/>}/>
    </View>
  )
}

export default CocktailsList

const styles = StyleSheet.create({
    container : {
        display : "flex",
        justifyContent : "center",
        margin : 10,
    }
})