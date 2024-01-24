// PAKAGE THIRD
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// PAKAGE LOCAL
import Home from "../Page/Home.jsx";
import About from "../Page/About.jsx";
import Contact from "../Page/Contact.jsx";
import Search from "../Page/Search.jsx";

function EnrutamientoTest() {
  return (
    <div className="component_EnrutamientoTest">
      <BrowserRouter>
        <h1>Testing Pakage react-router-dom</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact/:nombreContact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default EnrutamientoTest;

/*
+ Summary:

  - Enrutamiento con React-Router-Dom.

  - Como capturar segmento dinamico de una url.

+ Explicacion Componentes:

  - Route --> recibe un path y de acuerdo a el, renderiiza un elemento.

  - Link --> Utiliza el historial del DOM para traer el elemento si recargar la pagina
              Lo Combierte en una Single Page Aplication (SPA)

+ Bibliografia:
  - npm install react-router-dom --save-dev
  - https://www.npmjs.com/package/react-router-dom

+ Recomendacione:
  - La libreria favorita de midu de react router es: wouter
    - https://github.com/molefrog/wouter

*/
