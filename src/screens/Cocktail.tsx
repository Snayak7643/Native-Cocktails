import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Cocktail = () => {
  return (
    <View style = {styles.cocktailWrappper}>
      <View style = {[styles.imageContainer, styles.shadow]} >
      <Image source = {{uri : "https://wallpapercave.com/wp/wp2131819.jpg"}} style={styles.cocktailImage}/>
      </View>
      <View style = {styles.cocktailDataWrapper}>
        <View style = {styles.cocktailData}>
            <Text style = {styles.dataHeading}>NAME :</Text>
            <Text style= {styles.dataInfo}>name</Text>
        </View>
        <View style = {styles.cocktailData}>
            <Text style = {styles.dataHeading}>CATEGORY :</Text>
            <Text style= {styles.dataInfo}>alcoholic</Text>
        </View>
        <View style = {styles.cocktailData}>
            <Text style = {styles.dataHeading}>INFO :</Text>
            <Text style= {styles.dataInfo}>alcoholic</Text>
        </View>
        <View style = {styles.cocktailData}>
            <Text style = {styles.dataHeading}>GLASS :</Text>
            <Text style= {styles.dataInfo}>alcoholic</Text>
        </View>
        <View style = {styles.cocktailData}>
            <Text style = {styles.dataHeading}>INSTRUCTIONS :</Text>
            <Text style= {styles.dataInfo}>alcoholic</Text>
        </View>
        <View style = {styles.cocktailData}>
            <Text style = {styles.dataHeading}>INGREDIENTS :</Text>
            <Text style= {styles.dataInfo}>alcoholic alcoholic alcoholic alcoholic alcoholic alcoholic</Text>
        </View>
      </View>
    </View>
  )
}

export default Cocktail; 

const styles = StyleSheet.create({
    cocktailWrappper:{
        flex : 1,
        justifyContent : "flex-start",
        alignItems : "center",
        padding : 10,
        backgroundColor : "rgba(192, 240, 158, 0.2)",
        
    }
    ,
    imageContainer:{
        backgroundColor : "black",
        width : "95%",
        height : 250,
        marginTop: 10,
        borderRadius :10,
    },
    cocktailImage:{
        width :"100%",
        height :"100%",
        resizeMode : "center",
    },
    shadow :{
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 5},
        shadowOpacity: 0.5,
        shadowRadius : 3,
        elevation: 20,
    },
    cocktailDataWrapper:{
        width : "100%",
        marginTop : 10,
        flex : 1,
        padding : 10,
    },
    cocktailData:{
        flexDirection : "row",
        marginVertical : 8,
        alignItems : "center",
    },
    dataHeading:{
        backgroundColor : "#476a2e",
        padding : 5,
        color : "white",
        fontWeight: "bold",
    },
    dataInfo :{
        maxWidth : "60%",
        marginHorizontal : 20,
        fontWeight : "bold",
    }
})