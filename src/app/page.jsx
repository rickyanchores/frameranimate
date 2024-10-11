'use client'

import { motion } from "framer-motion";
import ButtonMotion from "./Components/ButtonMotion/ButtonMotion";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Nav from "./Components/Nav/Nav";
import PageWrapper from "./pageWrapper";
export default function App() {
  return (
    <div className="App n min-h-screen grid justify-center items-center ">
      <Nav />
      <PageWrapper>
        <Home />
        <ButtonMotion />
        <About />
        <Contact />
      </PageWrapper>
    </div>
  );
}
