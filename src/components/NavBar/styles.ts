import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: var(--gradient);
  border-bottom: 1px solid #dadada;
  height: 10rem;

  @media screen and (max-width: 768px) {
    border-bottom: none;
    height: 6rem;
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media screen and (max-width: 825px) {
      display: none;
    }
  }

  a {
    height: 66%;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 21px;
    text-decoration: none;
    color: var(--primary-color);
  }

  a:hover,
  a:checked,
  a:focus {
    border-bottom: 3px solid #fff;
  }

  .logo {
    @media screen and (max-width: 768px) {
      width: 14rem;
      height: 4rem;
    }
  }

  @media screen and (min-width: 780px) {
    border-bottom: none;
    .logo {
      margin: 1rem;
    }
    .navbar {
      padding-right: 6rem;
    }
  }
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    cursor: pointer;
    color: var(--primary-color);
    margin-right: 2.3rem;
    width: 5%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    svg {
      width: 118%;
    }
  }
`;
