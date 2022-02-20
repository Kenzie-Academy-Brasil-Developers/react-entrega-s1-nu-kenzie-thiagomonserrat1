import Logo from "../../Imagens/logobranca.png";
import background from "../../Imagens/landing.png";
import "./style.css";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();
  return (
    <div className="preto">
      <div className="princ">
        <img className="logo" src={Logo} alt="logo"></img>
        <p className="pInfo">Centralize o controle de suas finanças</p>
        <p className="pDeta">de forma rápida e segura</p>
        <button onClick={() => history.push("/painel-de-controle")}>
          Iniciar
        </button>
      </div>
      <img className="back" src={background} alt="Imagem ilustrativa" />
    </div>
  );
};
export default Home;
