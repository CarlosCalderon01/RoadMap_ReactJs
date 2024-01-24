// PAKAGE THIRD
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// PAKAGE LOCAL
import Home from "../Page/Home.jsx";
import About from "../Page/About.jsx";
import Contact from "../Page/Contact.jsx";

function EnrutamientoTest() {
  return (
    <div className="component_EnrutamientoTest">
      <BrowserRouter>
        <h1>testing pakage react-router-dom</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default EnrutamientoTest;

/*
- Summary:

  - Enrutamiento con React-Router-Dom

- Explicacion Componentes:

  - Route --> recibe un path y de acuerdo a el, renderiiza un elemento

  - Link --> Utiliza el historial del DOM para traer el elemento si recargar la pagina
              Lo Combierte en una Single Page Aplication (SPA)

- Bibliografia
  - npm install react-router-dom --save-dev
  - https://www.npmjs.com/package/react-router-dom

- Recomendacione:
  - La libreria favorita de midu de react router es: wouter
    - https://github.com/molefrog/wouter

*/
