import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PageBase from "../components/pagesBases/PageBase"
import ContentHome from "../components/contents/ContentHome/ContentHome"
import "../css/globals.css";
import '@picocss/pico';


const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <PageBase>
        <ContentHome />
      </PageBase>
    </>)
}

export default IndexPage

export const Head: HeadFC = () => <title>Home</title>
