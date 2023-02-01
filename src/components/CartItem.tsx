import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import Button from './Button';
import { decrease, increase, remove } from '../../Reducers/actions';

const CartItem = () => {

    const {state, dispatch} = useContext(CartContext);

  return (
    <ScrollView>
       {state.cartCocktails.map((cocktail)=>{
        return (
            <View key = {cocktail.id} style = {styles.grid}>
                <Image source={{uri : cocktail.img}} style = {styles.image}/>
                <View>
                    <Text style = {styles.boldText}>{cocktail.name}</Text>
                </View>
                <View style = {styles.quantityWrapper}>
                    <TouchableOpacity onPress={()=>{dispatch(increase(cocktail.id))}}>
                        <Text style = {styles.boldText}>+</Text>
                    </TouchableOpacity>
                    <Text style = {styles.boldText}>
                        {cocktail.quantity}
                    </Text>
                    <TouchableOpacity
                    onPress ={()=>{
                        if(cocktail.quantity === 1){
                            dispatch(remove(cocktail.id));
                            return;
                        }
                        dispatch(decrease(cocktail.id));
                    }}>
                        <Text style = {styles.boldText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
       })}
    </ScrollView>
  )
}

export default CartItem

const styles = StyleSheet.create({
   grid :{
    flexDirection:"row",
    width : "95%",
    alignItems:"center",
    justifyContent : "space-between",
    marginVertical: 3,
   },
   image :{
    height: 50,
    width : "25%",
    resizeMode: "contain",
   },
   boldText:{
    fontWeight : "bold",
   },
   quantityWrapper:{
      width : "10%",
      flex:1,
      alignItems: "flex-end",
      justifyContent:"space-around",
   }
})