import * as React from "react"
import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";


interface Props {
  children?: ReactNode
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
