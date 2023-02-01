import { StyleSheet, View, Text } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CartContext from '../../contexts/CartContext'
import CartItem from '../components/CartItem'

const Cart = () => {
  const {state} = useContext(CartContext);

  if(state.cartCocktails.length === 0){
    return(
        <View style = {styles.noItems}>
        <Text style = {styles.noItemsText}>No Items</Text>
      </View>
    )
  }

  return (
   <SafeAreaView>
      <CartItem/>
      <View style = {styles.divider}/>
      <View style = {styles.total}>
        <Text style={styles.boldText}>Total : </Text>
        <Text>${state.totalAmount}</Text>
      </View>
   </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
    total:{
        marginBottom : 25,
        marginVertical: 5,
        marginHorizontal : 15,
        width : "95%",
      flexDirection:"row",
      justifyContent : "space-between",
    },
    boldText:{
        fontWeight : "bold",
    },
    divider:{
        marginHorizontal : 10,
        width : "95%",
        borderBottomWidth : 1,
    },
    noItems:{
        flex:1,
        justifyContent : "center",
        alignItems : "center",
        width : "100%",
    },
    noItemsText:{
        fontWeight:"bold",
        fontSize : 40,
    },
})