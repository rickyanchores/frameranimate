'use client'

import { motion } from "framer-motion";
import ButtonMotion from "./Components/ButtonMotion/ButtonMotion";
import Home from "./Pages/Home/Home";
export default function App() {
  return (
    <div className="App min-h-screen grid justify-center items-center ">
      <Home />
      <ButtonMotion />
    </div>
  );
}
