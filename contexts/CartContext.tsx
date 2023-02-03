import React, { createContext } from "react";
import { initialCartState } from "../constants/initialState";
import { actionType, stateType } from "../types";

const CartContext = createContext<{
  state: stateType;
  dispatch: React.Dispatch<actionType>;
}>({ state: initialCartState, dispatch: () => null });

export default CartContext;