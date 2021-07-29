import { FormEvent, useState } from "react";

import { Container } from "./styles";

export function Formulario() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const maskPhone = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <Container id="formVibragua" onSubmit={handleSubmit}>
      <h2>Formulario de Contato</h2>

      <input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(maskPhone(e.target.value))}
        required
      />

      <input
        placeholder="E-mail"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        required
      />

      <input
        placeholder="Assunto"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />

      <input
        placeholder="Mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <div className="buttoncheck">
        <input className="botaoCheck" type="checkbox" id="check" required />
        <label className="check" htmlFor="check">
          Concordo com os
          <a href="./politica-privacidade" target="_blank">
            Termos e Políticas
          </a>
          deste Website.
        </label>
      </div>

      <button type="submit">
        <img src="./buttonEnviar.svg" alt="Botão agendamento" /> Enviar
      </button>
    </Container>
  );
}
