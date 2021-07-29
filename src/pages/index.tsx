import React from "react";
import NavBar from "../components/NavBar";
import { About } from "../Templates/About";
import { Contact } from "../Templates/Contact";
import { HomePage } from "../Templates/Home";

export default function Home() {
  return (
    <>
      <NavBar />
      <div>
        <HomePage />
        <About />
        <Contact />
      </div>
    </>
  );
}
