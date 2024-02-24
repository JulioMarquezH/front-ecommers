import * as React from "react"
import Header from "../Header";
import Footer from "../Footer";


interface Props {
  children?: React.ReactNode
}

export default function PageBase({ children }: Props) {

  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
}
