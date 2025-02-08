import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100vw;
  height: 80px;
  background-color: #111111;
  display: flex;
  justify-content: center;
  padding: 10px 30px;
  justify-content: space-between;
  .botao {
    display: flex;
    align-items: center;
    gap: 20px;
    button {
      padding: 5px 10px;
      border-radius: 10px;
      border: solid 2px transparent;
      font-weight: 600px;
    }
    .vermelho {
      background-color: #df0712;
    }
    .branco {
      background-color: transparent;
      border-color: white;
    }
  }
`;
