import {createContext} from "react";
import {basketContextType, defaultTreeContext, userContextType} from "./Types";

export const UserContext = createContext<userContextType | null>(null);
export const ProductContext = createContext(defaultTreeContext);
export const BasketContext = createContext<basketContextType | null>(null);