import React from "react";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import { About } from "../Templates/About";
import { Contact } from "../Templates/Contact";
import { HomePage } from "../Templates/Home";
import { Slider } from "../Templates/Slider";

export default function Home() {
  return (
    <>
      <NavBar />
      <div>
        <HomePage />
        <About />
        <Slider />
        <Contact />
      </div>

      <Footer />
    </>
  );
}
