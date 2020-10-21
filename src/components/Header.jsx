import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram  } from '@fortawesome/free-brands-svg-icons'

export default () => (
  <header id="header">
    <h1>
      <a href="/">
        <strong>Fotografía</strong> de Samuel Silva
      </a>
    </h1>
    <nav>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/samuel_ph_1/"
            target="_blank" rel="noreferrer"
            title="Sígueme en Instagram"
            className="instagram"
          >
            <FontAwesomeIcon icon={faInstagram} /> @samuel_ph_1
          </a>
        </li>
      </ul>
    </nav>
  </header>
)
