import { createContext, useReducer } from "react";

const initialValue = {
    data: [],
    language: "UZB",
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
    const { type, payload } = action;
    switch (type) {
        case "CHANGE_LANGUAGE":
            return { ...state, language: payload };
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
