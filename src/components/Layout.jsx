import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header"

export default function Layout({ title, children }) {
  const [styles, setStyles] = useState("wrapper preload")
  useEffect(() => {
    const timer = setTimeout(() => {
      setStyles("wrapper")
    }, 200)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <Helmet>
        <title>Fotografía Silva - {title}</title>
        <link rel="icon" href="logo.png" type="image/x-icon" />
      </Helmet>
      <div className={styles}>
        <Header />
        {children}
      </div>
    </>
  )
}
