import { StyleSheet, View, ScrollView } from 'react-native'
import React, { useContext } from 'react';
import SearchBox from '../components/SearchBox';
import CocktailsList from '../components/CocktailsList';
import Button from '../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigatorType } from '../../App';
import CartContext from '../../contexts/CartContext';

type PropType = NativeStackScreenProps<StackNavigatorType, "Cocktails">;

const Home = ({navigation}:PropType) => {

const {state} = useContext(CartContext);

const navigateToCart = ()=>{
   navigation.navigate("Cart");
};

const navigateToAbout = ()=>{
  navigation.navigate("About");
};

  return (
    <ScrollView style = {styles.wrapper} stickyHeaderIndices={[0]}>
      <View>
         <SearchBox/>
         <Button title={"Cart (" + state.totalQuantity + ")"} onPress ={navigateToCart}/>
      </View>
      <View>
      <Button title = "About Us" onPress={navigateToAbout}/>
      </View>
      <View style = {styles.list}>
       <CocktailsList/>
      </View>
      </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor : "rgba(192, 240, 158, 0.2)",
    },
      list :{
        marginVertical: 30,
      },
      navbar:{
        flexDirection: "row",
      },
})