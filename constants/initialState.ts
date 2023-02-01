import { stateType } from "../types";

export const initialCocktailState = {
  cocktails: [],
  loading: true,
  searchTerm: "",
  handleChange: () => {},
};

export const initialCartState: stateType = {
  cartCocktails: [],
  totalQuantity: 0,
  totalAmount: 0,
};