import React from "react"

export default () => (
  <footer id="footer" className="panel">
    <div className="inner split">
      <div>
        <section>
          <h2>Fotografía de Samuel Silva</h2>
          <p>Capturando los momentos que hacen tu historia!</p>
        </section>
        <section>
          <h2>Sígueme en ...</h2>
          <ul className="icons">
            <li>
              <a
                href="https://www.instagram.com/samuel_ph_1/"
                target="_blank" rel="noreferrer"
                className="icon brands fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
        </section>
        <p className="copyright">
          Diseño de : <a href="http://html5up.net">HTML5 UP</a>.
        </p>
      </div>
      <div>
        <section>
          <img
            className="fotografo	"
            src="images/silva-intenso.png"
            alt="Samuel Silva"
            title="Samuel Silva"
          />
        </section>
      </div>
    </div>
  </footer>
)
