import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalFonts from "./fonts/fonts"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<StrictMode>
     <GlobalFonts/>
    <App />
</StrictMode>);
reportWebVitals();
