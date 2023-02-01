import React,{useState, useCallback, useEffect} from 'react';
import { cocktailType } from '../../types';
import { ALL_URL } from '../../constants/URL';

const useFetchOnSearch = () => {

    const [cocktails, setCocktails] = useState<cocktailType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchterm] = useState<any>("");

  const handleChange = (newSearchTerm : string)=>{
    setSearchterm(newSearchTerm);
  }

  const fetchCocktails = useCallback(async () => {
    setLoading(true);
    try {
      console.log("fetching");
      const response = await fetch(ALL_URL + searchTerm);
      const res = await response.json();
      if (res.drinks) {
        const desiredCocktails = res.drinks.map((drink: any) => {
          const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            alcoholic: strAlcoholic,
            glass: strGlass,
            img: strDrinkThumb,
          };
        });
        setCocktails(desiredCocktails);
        setLoading(false);
        return;
      }
      setCocktails([]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(()=>{
    fetchCocktails();
  },[searchTerm]);

  return {cocktails, loading, searchTerm, handleChange};
  
}

export {useFetchOnSearch};