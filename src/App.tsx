import { HeaderStyled } from "./headerStyled";
import { SectionStyled } from "./sectionStyled";
import { FooterStyled } from "./footerStyled";
import timmy from "./assets/Timmy (1).png";
import logo from "./assets/nickelodeon.png";
import imagem1 from "./assets/img 1 (1).png";
import imagem2 from "./assets/img 2 (1).png";
import imagem3 from "./assets/img 3 (1).png";
export default function App() {
  return (
    <>
      <HeaderStyled>
        <img src={logo} alt="nickelodeon" className="imagem1" />
        <div className="botao">
          <button className="vermelho">Acessa agora</button>
          <button className="branco">Entrar</button>
        </div>
      </HeaderStyled>
      <SectionStyled>
        <div className="titulo">
          <h1>
            Episódios <br /> <span>Os Padrinhos mágicos</span>
          </h1>
          <img src={timmy} alt="Timmy" />
        </div>
        <div className="imagens">
          <div>
            <img src={imagem1} alt="imagem1" />
            <span>
              <b className="subt">1. Anti Poof</b>
              <p className="descricao">
                Wanda sente uma nova ameaça: o nascimento de Foop, o oposto
                antifada de Poof. Depois de arruinar o Mundo Antifadas, Foop
                está de olho no Mundo das Fadas e na Terra!
              </p>
            </span>
          </div>

          <div>
            <img src={imagem2} alt="imagem2" />
            <span>
              {" "}
              <b className="subt">
                2. Acrescente um pai/Esquilinhos e Bombas de Creme
              </b>
              <p className="descricao">Wanda sente uma nova ameaça:</p>
            </span>
          </div>

          <div>
            <img src={imagem3} alt="" />
            <span>
              {" "}
              <b className="subt">3. Ratoescapáveis/A Fórmula do Desastre</b>
              <p className="descricao">
                Poof transforma Timmy e Vicky em personagens de desenho animado.
              </p>
            </span>
          </div>
        </div>
      </SectionStyled>
      <FooterStyled>
        <div className="footer">
          <b>Termos e aviso de privacidade </b>
          <b>Ajuda</b>
          <b>Feedback</b>
        </div>
      </FooterStyled>
    </>
  );
}
