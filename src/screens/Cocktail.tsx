import { StyleSheet, Text, View, Image } from 'react-native'
import React,{useState, useEffect, useCallback} from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackNavigatorType } from '../../App';
import { cocktailDetailType } from '../../types';
import { SINGLE_URL } from '../../constants/URL';
import Loader from '../components/Loader';

type PropType = NativeStackScreenProps<StackNavigatorType, "Cocktail_Details">;

const Cocktail = ({route}:PropType ) => {

    const id = route.params.id;
    
    const [loading, setLoading] = useState<boolean>(true);
    const [cocktail, setCocktail] = useState<cocktailDetailType>(
        {} as cocktailDetailType
      );
    
      const fetchTheCocktail = useCallback(async () => {
        console.log("fecthing single");
        setLoading(true);
        try {
          const response = await fetch(SINGLE_URL + id);
          const res = await response.json();
          const drink = res.drinks;
          if (drink && drink.length) {
            const {
              idDrink,
              strDrink,
              strCategory,
              strAlcoholic,
              strGlass,
              strDrinkThumb,
              strInstructions,
            } = drink[0];
            const { strIngredient1, strIngredient2 } = drink[0];
            const ingredients = [strIngredient1, strIngredient2];
            setCocktail({
              id: idDrink,
              name: strDrink,
              category: strCategory,
              alcoholic: strAlcoholic,
              glass: strGlass,
              img: strDrinkThumb,
              ingredients,
              instructions: strInstructions,
            });
            setLoading(false);
            return;
          }
          setCocktail({} as cocktailDetailType);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }, [id]);
    
      useEffect(() => {
        fetchTheCocktail();
      }, [id, fetchTheCocktail]);

      const { name, category, glass, alcoholic, img, ingredients, instructions } =
    cocktail;

    //Return

    if(loading){
        return(<Loader/>);
    }

  return (
    <View style = {styles.cocktailWrappper}>
      <View style = {[styles.imageContainer, styles.shadow]} >
      <Image source = {{uri : img}} style={styles.cocktailImage}/>
      </View>
      <View style = {styles.cocktailDataWrapper}>
        <View style = {styles.cocktailData}>
            <Text style = {styles.dataHeading}>NAME :</Text>
            <Text style= {styles.dataInfo}>{name}</Text>
        </View>
        <View style = {styles.cocktailData}>
            <Text style = {styles.dataHeading}>CATEGORY :</Text>
            <Text style= {styles.dataInfo}>{category}</Text>
        </View>
        <View style = {styles.cocktailData}>
            <Text style = {styles.dataHeading}>INFO :</Text>
            <Text style= {styles.dataInfo}>{alcoholic}</Text>
        </View>
        <View style = {styles.cocktailData}>
            <Text style = {styles.dataHeading}>GLASS :</Text>
            <Text style= {styles.dataInfo}>{glass}</Text>
        </View>
        <View style = {styles.cocktailData}>
            <Text style = {styles.dataHeading}>INSTRUCTIONS :</Text>
            <Text style= {styles.dataInfo}>{instructions}</Text>
        </View>
        <View style = {styles.cocktailData}>
            <Text style = {styles.dataHeading}>INGREDIENTS :</Text>
            <Text style= {styles.dataInfo}>{ingredients[0]}, {ingredients[1]}</Text>
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