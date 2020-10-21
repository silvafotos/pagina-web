import React from "react"
import Category from "./Category"
import galleryData from "../../data/gallery.json"
import { Row } from "react-bootstrap"

export default () => {
  return (
    <main id="gallery">
      <Row noGutters>
        {galleryData.map((category, index) => (
          <Category
            key={`photo-${index}`}
            link={category.link}
            thumbnail={category.thumbnail}
            title={category.title}
          />
        ))}
      </Row>
    </main>
  )
}
