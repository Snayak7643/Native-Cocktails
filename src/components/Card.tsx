import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Button from './Button'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackNavigatorType } from '../../App'
import { cocktailType } from '../../types'

type PropType = {
    cocktail : cocktailType;
}

const Card : React.FC<PropType> = ({cocktail}) => {

    const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorType>>();

    const {id, name, glass, alcoholic, img} = cocktail;

  return (
    
    <View style = {[styles.cocktail, styles.shadow]}>
      <View >
        <Image source = {{uri : img}} style = {styles.cardImage}/>
      </View>
      <View style = {styles.cocktailFooter}>
        <Text style = {styles.heading}>{name}</Text>
        <Text style = {styles.heading}>{glass}</Text>
        <Text style = {styles.heading}>{alcoholic}</Text>
        <Button title = "Details" onPress={()=>{navigation.navigate("Cocktail_Details", {id})}}/>
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
       fontWeight : "bold",
       textAlign : "center",
       margin : 2
    },
})