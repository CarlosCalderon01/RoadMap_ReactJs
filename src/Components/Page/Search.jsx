import { Link } from "react-router-dom";

function Search() {
    const listContactUsers = [
        'carlos',
        'carlitos',
        'carlotes',
        'carlangas',
        'tangas',
        'papasote'
    ]

  return (
    <div className="component_Search">
      <div className="Titulo_Pagina">
        <h1>Component Page Search!</h1>
      </div>
      <div className="Description_Pagina">
        <p>Description pagina</p>
      </div>
      <div className="Contenido_Pagina">
        <div className="Contenido_Testing">
            <h1>React Router List Dinamic</h1>
            <ul>
                {listContactUsers.map(UserContact => (
                    <li key={UserContact}><Link to={`/Contact/${UserContact}`}>{UserContact}</Link></li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Search;


/*
+ Summary:

  - Como capturar segmento dinamico de una url.

*/
