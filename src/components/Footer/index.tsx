import { Container } from "./styles";
import { FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <Container>
      <div className="text">
        <img src="./logoVibragua.png" alt="Logo Vibragua" />
        <p>© 2021 Vibrágua. Todos os direitos reservados.</p>

        <p>
          Desenvolvido por
          <a
            href="https://www.agenciapremium.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            Agência Premium
          </a>
        </p>
      </div>

      <div className="icons">
        <a
          href="https://www.instagram.com/bombasvibragua/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram color="#FFF" size={32} />
        </a>

        <a
          href="https://pt-br.facebook.com/BombasVibragua/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare color="#FFF" size={32} />
        </a>
      </div>
    </Container>
  );
}
