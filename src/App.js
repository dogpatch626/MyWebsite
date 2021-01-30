//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import Counter from "./components/components";
import Learn from "./components/learnhook";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import HomePage from "./pages/home";
import Navbar from "./components/navbar";
// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// };

//const theme = extendTheme(colors);
function App() {
  return (
    <div className="">
      {/* <ChakraProvider theme={theme}>
        <Box bg="tomato" w="100%" p={4} color="white">
          This is the Box
        </Box> */}

      <Router>
        <Navbar />
        <Route exact path="/" component={HomePage}>
          {/* <Counter /> */}
        </Route>
        <Route exact path="/about">
          <h1>about</h1>
        </Route>
      </Router>
      {/* <Counter />  */}
      {/* <Learn /> */}
      {/* </ChakraProvider> */}
    </div>
  );
}

export default App;
