import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import Card from './Card'
import CocktailContext from '../../contexts/CocktailContext'

const CocktailsList = () => {

    const { cocktails, loading } = useContext(CocktailContext);

    if(loading){
      return(
        <View>
          <Text>Loading...</Text>
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
        display : "flex",
        justifyContent : "center",
        margin : 10,
    }
})