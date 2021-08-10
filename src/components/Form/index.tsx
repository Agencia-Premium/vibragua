/* eslint-disable @next/next/no-html-link-for-pages */
import axios from "axios";
import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";

import { Container } from "./styles";

interface dadosProps {
  nome: string;
  telefone: string;
  email: string;
  assunto: string;
  mensagem: string;
}
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

  //validar o formulário
  let validationForm = false;
  if (
    name !== "" &&
    phone !== "" &&
    mail !== "" &&
    subject !== "" &&
    message !== ""
  ) {
    validationForm = true;
  }

  //envio ao excell
  async function sendToExcel() {
    const dadoForm: dadosProps = {
      nome: name,
      telefone: phone,
      email: mail,
      assunto: subject,
      mensagem: message,
    };

    await axios
      .post(
        "https://sheet.best/api/sheets/d5927f00-4656-460b-b575-e7c3ceb8610d",
        dadoForm
      )
      .then(() => {
        toast.success("Formulário enviado com sucesso! Obrigado pelo envio");
      })
      .catch((error) => {
        toast.error(error);
      });
  }
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (validationForm) {
      await sendToExcel();
      setName("");
      setPhone("");
      setMail("");
      setSubject("");
      setMessage("");
    }
  }

  return (
    <Container id="formVibragua" onSubmit={handleSubmit}>
      <h2>Formulário de Contato</h2>

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

      <textarea
        placeholder="Mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <div className="buttoncheck">
        <input className="botaoCheck" type="checkbox" id="check" required />
        <label className="check" htmlFor="check">
          Concordo com os
          <a href="/privacity" target="_blank">
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
