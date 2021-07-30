import styled from "styled-components";

export const Container = styled.form`
  width: 50rem;
  max-height: 65rem;
  padding: 2rem 2rem;
  border-radius: 1rem;
  background: #f0f2f5;
  box-shadow: 0 4px 10px rgba(92, 99, 105, 0.2);

  @media screen and (max-width: 1024px) {
    height: 65rem;
  }

  @media screen and (max-width: 768px) {
    height: 65rem;
  }

  h2 {
    font-size: 2.2rem;
    color: #363f5f;
    text-align: center;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .buttoncheck {
    margin-top: 2rem;

    label {
      font-size: 1.6rem;
      padding-left: 2rem;
    }

    .check {
      color: #737380;

      a {
        padding: 0 0.6rem;
        color: #333;
      }
    }
    .botaoCheck {
      width: 4% !important;
      transform: scale(1.5);
    }
  }

  input:not(.botaoCheck),
  select,
  textarea {
    width: 100%;
    padding: 0 1.5rem;
    height: 5.4rem;
    border-radius: 0.5rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }

    & + input,
    & + select,
    & + textarea {
      margin-top: 1.6rem;
    }
  }

  textarea {
    resize: none;
    padding: 2rem;
    min-height: 13rem;
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 5rem;
    background: rgba(9, 32, 109, 0.82);
    color: #fff;

    border-radius: 0.25rem;
    border: 0;
    font-size: 1.6rem;
    margin-top: 1.5rem;
    font-weight: 600;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    transition: filter 0.2s;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
