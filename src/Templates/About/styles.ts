import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;

  .imgDroplet {
    position: absolute;
    left: 0%;
    top: 0%;
    width: 30%;
  }
  h2 {
    color: var(--text-primary);
    margin: 2.4rem 0;
  }
  #ContainerRight {
    display: flex;
    padding: 0 2rem;
    flex-direction: column;
    align-items: center;

    .tituloImg {
      width: 50%;
    }
    .paragrafos {
      text-align: justify;
    }
  }
`;
