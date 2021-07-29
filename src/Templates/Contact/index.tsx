import { Formulario } from "../../components/Form";
import { ContactContainer, Container } from "./styles";

export function Contact() {
  return (
    <Container>
      <h1>Entre em contato com a gente!</h1>

      <ContactContainer>
        <div className="left">
          <img src="./bg.png" alt="Grupo bombas" />
        </div>

        <div className="right">
          <Formulario />
        </div>
      </ContactContainer>
    </Container>
  );
}
