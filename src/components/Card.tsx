import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Button from './Button'

const Card = () => {
  return (
    
    <View style = {[styles.cocktail, styles.shadow]}>
      <View >
        <Image source = {{uri : "https://wallpapercave.com/wp/wp2131819.jpg"}} style = {styles.cardImage}/>
      </View>
      <View style = {styles.cocktailFooter}>
        <Text style = {styles.heading}>Name</Text>
        <Text style = {styles.heading}>Glass</Text>
        <Text style = {styles.heading}>Alcoholic</Text>
        <Button title = "Details" onPress={()=>{}}/>
        <Button title = "Add To Cart" onPress={()=>{}}/>
        </View>
      </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cocktail:{
        width : "95%",
       backgroundColor : "#fff",
       marginBottom: 10,
       display : "flex",
       borderRadius : 5,
       margin : 5,
    },
    shadow :{
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 5},
        shadowOpacity: 0.5,
        shadowRadius : 3,
        elevation: 20,
    },
    cardImage:{
        width : "100%",
        height : 200,
        resizeMode: 'center',
        backgroundColor : "black",
    },
    cocktailFooter:{
        padding : 20,
    },
    heading :{
       color :"#989ea6",
       fontWeight : "bold",
       textAlign : "center",
       margin : 2
    },
})