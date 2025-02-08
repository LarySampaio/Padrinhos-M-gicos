import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');


*{margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  
}
h1 , h2 , h3 , p , a, b , span, button{
  font-family: "Inter", sans-serif;
  color: white;

}
body{
  background-color: #181818;
  overflow-x: hidden;

  &::-webkit-scrollbar{
    background-color: #111111;
    width: 16px;
    border: solid 2px white;
    border-radius: 8px

  }
  &::-webkit-scrollbar-thumb{
    background-color: white;
    border-radius: 8px;
  }
}
`;
