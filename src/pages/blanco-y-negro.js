import React from "react"
import Layout from "../components/Layout"
import galleryData from "../../data/gallery.json"
import { Card, Col, Row } from "react-bootstrap"
import Category from "../components/Category"

export default () => {
  return (
    <Layout title="Blanco y Negro">
      <main id="gallery">
        <Row noGutters>
          {galleryData[3].images.map((category, index) => {
            return (
              <Category
                key={`photo-${index}`}
                portrait={true}
                thumbnail={category.thumbnail}
                title={category.title}
              />
            )
          })}
        </Row>
      </main>
    </Layout>
  )
}
