import { createContext, useReducer } from "react";

const initialValue = {
    dataMenu: [],
    language: "",
    dataProduct: [],
    loading: false,
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
    const { type, payload } = action;
    switch (type) {
        case "CHANGE_LANGUAGE":
            return { ...state, language: payload };
        case "ADD_MENU_DATA":
            return { ...state, dataMenu: payload };
        case "ADD_PRODUCT_DATA":
            return { ...state, dataProduct: payload };
        case "CHANGE_LOADING":
            return { ...state, loading: payload };
        default:
            return { state };
    }
};

const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export default ThemeContextProvider;
