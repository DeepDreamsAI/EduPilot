import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Chat from "./components/Chat/Chat";
// import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      {/* <Nav />
      <Hero /> */}
      <Chat />
    </>
  );
}

export default App;