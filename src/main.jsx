import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import ThemeContextProvider from "./context/ThemeContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
);
