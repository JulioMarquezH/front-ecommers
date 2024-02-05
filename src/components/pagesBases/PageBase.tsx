import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

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
