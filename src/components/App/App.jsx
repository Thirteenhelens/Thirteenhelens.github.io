import "./App.css";
import * as React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#82AEB1",
        main: "#93C6D6",
        dark: "#668586",
        contrastText: "#fff",
      },
      secondary: {
        light: "#A7ACD9",
        main: "#9E8FB2",
        dark: "#2B2D42",
        contrastText: "#000",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Profile />
        <Portfolio />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
