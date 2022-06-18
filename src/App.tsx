import React from "react";
import "./App.css";
import Router from "./routes";
import ThemeProvider from "./theme";
import { ThemeModeProvider } from "./theme/ThemeModeProvider";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <ThemeModeProvider>
            <ThemeProvider>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </ThemeProvider>
        </ThemeModeProvider>
    );
}

export default App;
