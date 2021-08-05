import styled, { keyframes } from "styled-components";

export const cardAnimation = keyframes`
  from {
    display: none;
    transform: translateY(10px);
  }
  to {
    display: block;
    transform: translateY(-0px)
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const CardBlog = styled.div`
  width: 30rem;
  min-height: 40rem;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;

  transition: 0.3s transform;
  animation: ${cardAnimation} calc(2s + 1s);

  &:hover {
    border: 2px solid var(--text-primary);

    transform: scale(1.04);
  }

  .header {
    width: 100%;
    height: 20rem;
    img {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      width: 100%;
      height: 100%;
    }
  }

  .content {
    width: 100%;
    height: 15rem;
    padding-top: 1rem;
    padding: 1rem;

    h2 {
      color: #2d3748;
    }

    p {
      color: #718096;
      padding-top: 1rem;
      text-align: justify;
    }
  }

  .footer {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 2rem 1rem 1rem;

    a {
      font-weight: bold;
      color: #2d3748;
      text-decoration: none;

      &:hover {
        text-decoration: 1px solid;
      }
    }
  }
`;
