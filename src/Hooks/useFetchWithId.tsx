import React, {useState, useEffect, useCallback} from 'react'
import { cocktailDetailType } from '../../types';
import { SINGLE_URL } from '../../constants/URL';

const useFetchWithId = (id:number) => {

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


  return {cocktail, loading};
}

export default useFetchWithId