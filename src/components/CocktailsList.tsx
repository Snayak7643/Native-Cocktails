import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import Card from './Card'
import CocktailContext from '../../contexts/CocktailContext'
import Loader from './Loader'

const CocktailsList = () => {

    const { cocktails, loading } = useContext(CocktailContext);

    if(loading){
      return(
       <Loader/>
      )
    }
    else if(cocktails.length === 0){
      return(
        <View style = {styles.noItems}>
          <Text style = {styles.noItemsText}>No Items Found</Text>
        </View>
      )
    }

  return (
    <View style = {styles.container}>
      {
        cocktails.map((cocktail)=>{
            return(<Card key = {cocktail.id} cocktail = {cocktail}/>)
        })
      }
    </View>
  )
}

export default CocktailsList

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        margin : 10,
    },
    noItems:{
      flex:1,
      justifyContent : "center",
      alignItems : "center",

  },
  noItemsText:{
      fontWeight:"bold",
      fontSize : 40,
  },
})