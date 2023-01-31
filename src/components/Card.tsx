import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Card = () => {
  return (
    
    <View style = {[styles.cocktail, styles.shadow]}>
      <View >
        <Image source = {{uri : "."}} style = {styles.CardImage}/>
      </View>
      <View style = {styles.cocktailFooter}>
        <Text style = {styles.heading}>Name</Text>
        <Text style = {styles.heading}>Glass</Text>
        <Text style = {styles.heading}>Alcoholic</Text>
        <TouchableOpacity style={styles.buttonCover} onPress={()=>{}}>
        <Text style = {styles.buttonText}>Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCover} onPress={()=>{}}>
        <Text style = {styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>
        </View>
      </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cocktail:{
        width : "90%",
       backgroundColor : "#fff",
       marginBottom: 10,
       display : "flex",
       borderRadius : 5,
    },
    shadow :{
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 5},
        shadowOpacity: 0.5,
        shadowRadius : 3,
        elevation: 20,
    },
    CardImage:{
        backgroundColor: "black",
        height : 200,
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
    buttonCover:{
        backgroundColor : "#476a2e",
        padding : 10,
        margin : 5,
    },
    buttonText :{
        color : "white",
        fontWeight : "bold",
        textTransform : "uppercase",
        textAlign : "center",
    }
})