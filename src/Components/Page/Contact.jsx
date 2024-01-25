import { useParams, Outlet, Link } from "react-router-dom";

function Contact() {
  const { idcontact } = useParams(); // Captura Segmentos Dinamicos, recuperarlo en un componente

  return (
    <div className="component_Contact">
      <div className="Titulo_Pagina">
        <h1>Component Page Contact!</h1>
      </div>
      <div className="Description_Pagina">
        <p>Description pagina Contact!</p>
      </div>
      <div className="Contenido_Pagina">
        <div className="Contenido_Testing">
          <h1>Usando useParams de React Router Dom</h1>
          <div className="Parametro_Dinamico">
            <p>{idcontact}</p>
            <Link to="details">Get Details Contact</Link>
            <Outlet />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Contact;

/*

+ Summary:
  - Recibiendo parametros de forma dinamica usando useParams.

  - <link to="details">Get Details Contact</link>
    - Se esta renderizando de forma relativa en base al contacto

*/
