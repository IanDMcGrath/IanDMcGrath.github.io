import React from "react";
import NavBar from "./components/navbar/navbar";
import MastHead from "./components/masthead/masthead";
import Portfolio from "./components/sections/portfolio/portfolio";

export default function App({ name, callback }) {
  return (
    <div ref={callback}>
      <NavBar />
      <MastHead />
      <Portfolio />
      <h1>{name}</h1>
    </div>
  );
}