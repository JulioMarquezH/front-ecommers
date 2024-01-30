import Hero from "@/components/contents/ContentHome/Hero";
import Gallery from "./Gallery";
import Contact from "./Contact";


export default function ContentHome() {

  return (
    <main className="container">
      <Hero />
      <Gallery />
      <Contact />
    </main>
  );
}
