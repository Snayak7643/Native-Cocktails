import ACTIONS from "../constants/actionNames";
import { actionType, stateType } from "../types";
import { initialCartState } from "../constants/initialState";

const cartReducer = (state: stateType, action: actionType) => {
  const { id } = action.payload;
  const cocktail = state.cartCocktails.filter((cocktail) => {
    return id === cocktail.id;
  });
  const price = cocktail.length === 0 ? 0 : cocktail[0].price;

  console.log("dispatch");

  switch (action.type) {
    case ACTIONS.ADD: {
      if (cocktail.length === 0) {
        const newState = {
          ...state,
          cartCocktails: [
            ...state.cartCocktails,
            {
              id,
              name: action.payload.name,
              img: action.payload.img,
              price: action.payload.price,
              quantity: 1,
            },
          ],
          totalQuantity: state.totalQuantity + 1,
          totalAmount: state.totalAmount + action.payload.price,
        };
        return newState;
      }
      const newState = {
        ...state,
        cartCocktails: state.cartCocktails.map((cocktail) => {
          if (id === cocktail.id) {
            return {
              ...cocktail,
              quantity: cocktail.quantity + 1,
            };
          }
          return cocktail;
        }),
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + price,
      };
      return newState;
    }

    case ACTIONS.INCREASE: {
      const newState = {
        ...state,
        cartCocktails: state.cartCocktails.map((cocktail) => {
          if (id === cocktail.id) {
            return {
              ...cocktail,
              quantity: cocktail.quantity + 1,
            };
          }
          return cocktail;
        }),
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + price,
      };
      return newState;
    }

    case ACTIONS.DECREASE: {
      const newState = {
        ...state,
        cartCocktails: state.cartCocktails.map((cocktail) => {
          if (id === cocktail.id) {
            return {
              ...cocktail,
              quantity: cocktail.quantity - 1,
            };
          }
          return cocktail;
        }),
        totalQuantity: state.totalQuantity - 1,
        totalAmount: state.totalAmount - price,
      };
      return newState;
    }

    case ACTIONS.REMOVE: {
      const newState = {
        ...state,
        cartCocktails: state.cartCocktails.filter((cocktail) => {
          return id !== cocktail.id;
        }),
        totalQuantity: state.totalQuantity - 1,
        totalAmount: state.totalAmount - price,
      };
      return newState;
    }

    case ACTIONS.CLEAR: {
      const newState = initialCartState;
      return newState;
    }

    case ACTIONS.ON_LOAD: {
      return action.payload.cartState;
    }

    default: {
      return state;
    }
  }
};

export default cartReducer;