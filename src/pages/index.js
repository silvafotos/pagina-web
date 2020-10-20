import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Header from "../components/Header"

export default () => {
  const [styles, setStyles] = useState("wrapper preload")
  useEffect(() => {
    const timer = setTimeout(() => {
      setStyles("wrapper")
    }, 100)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <Helmet>
        <title>Fotografía Silva</title>
        <link rel="icon" href="favicon.png" type="image/x-icon" />
      </Helmet>
      <div className={styles}>
        <Header />
        <Gallery />
        <Footer />
      </div>
    </>
  )
}
