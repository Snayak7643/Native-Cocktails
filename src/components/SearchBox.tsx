import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import CocktailContext from '../../contexts/CocktailContext'

const SearchBox = () => {

  const {handleChange} = useContext(CocktailContext);

  return (
    <View style = {[styles.searchContainer, styles.shadow]}>
      <Text>Search Your Favourite Cocktail</Text>
      <TextInput style = {styles.input} onChangeText = {handleChange} placeholder = "Serach Here..."/>
    </View>
  )
}

export default SearchBox

const styles = StyleSheet.create({
    searchContainer :{
        backgroundColor : "white",
        padding : 10,
    },
    input :{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor : "#476a2e",
        borderRadius : 5,
    },
    shadow :{
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 5},
        shadowOpacity: 0.5,
        shadowRadius : 3,
        elevation: 10,
    },
})