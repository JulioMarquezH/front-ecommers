import * as React from "react"
import Contact from "./Contact";
import Gallery from "./Gallery";
import Hero from "./Hero";


export default function ContentHome() {

  return (
    <main className="container">
      <Hero />
      <Gallery />
      <Contact />
    </main>
  );
}
