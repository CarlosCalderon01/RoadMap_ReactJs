import { useParams } from "react-router-dom";

function Contact() {
  const { nombreContact } = useParams(); // Captura Segmentos Dinamicos, recuperarlo en un componente

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
            <p>{nombreContact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

/*

+ Summary:
  - Recibiendo parametros de forma dinamica usando useParams.

*/
