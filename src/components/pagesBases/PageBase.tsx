import Footer from "../Footer";
import Header from "../Header";

export default function PageBase({ children }) {

  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
}
