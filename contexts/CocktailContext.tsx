import { createContext } from "react";
import { initialCocktailState } from "../constants/initialState";
import { cocktailContextType } from "../types";

const CocktailContext =
  createContext<cocktailContextType>(initialCocktailState);

export default CocktailContext;