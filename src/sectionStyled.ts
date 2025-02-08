import styled from "styled-components";

export const SectionStyled = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: 95%;
  max-width: 1000px;
  margin: 100px auto 100px auto;

  .titulo {
    display: flex;
    font-size: 24px;
    font-weight: 700;
    text-align: left;

    justify-content: space-between;
    h1 {
      span {
        font-weight: 400;
      }
    }
    img {
      width: 80px;
      height: auto;
    }
  }
  .imagens {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    div {
      width: 25%;
    }
    img {
      width: 100%;
      transition: 0.5s;

      &:hover {
        transform: scale(1.1) translateY(-15px);
        box-shadow: 0px 10px 10px 0px rgb(200, 10, 20, 0.3);
      }
    }
    span {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      .descricao {
        font-size: 12px;
        letter-spacing: 1px;
      }
    }
  }
`;
