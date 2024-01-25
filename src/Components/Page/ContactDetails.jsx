import { useParams } from "react-router-dom";

function ContactDetails() {
  const { idcontact } = useParams();

  return (
    <div className="component_ContactDetails">
      <h1>Contact Details</h1>
      <p>Estos son los detalles del contacto {idcontact}</p>
    </div>
  );
}

export default ContactDetails;
