import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CartContext from '../../contexts/CartContext'

const Cart = () => {

    const {state} = useContext(CartContext);

  return (
   <SafeAreaView>
      <FlatList data = {state.cartCocktails} 
        renderItem={({item})=> <Text>{item.name}</Text>}/>
   </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({})