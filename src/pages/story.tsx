import React from "react";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import { StoryPage } from "../Templates/Story";

export default function History(): JSX.Element {
  return (
    <>
      <NavBar
        linkHome="/"
        linkAbout="/"
        linkProduct="/"
        linkContact="/"
        linkBlog="/"
      />
      <StoryPage />;
      <Footer />
    </>
  );
}
