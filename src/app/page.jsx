'use client'

import { motion } from "framer-motion";
import ButtonMotion from "./Components/ButtonMotion/ButtonMotion";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Nav from "./Components/Nav/Nav";
export default function App() {
  return (
    <div className="App min-h-screen grid justify-center items-center ">
      <Nav />
      <Home />
      <ButtonMotion />
      <About />
      <Contact />
    </div>
  );
}
