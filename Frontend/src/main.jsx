import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { UserDataProvider } from "./context/UserDataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <UserDataProvider>
          <App />
        </UserDataProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
