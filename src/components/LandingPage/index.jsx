import { Logo } from "../Logo";
import "./style.css";
import background from "../../images/landing.png";

export const LandingPage = ({ setPage, page }) => {
  return (
    <div className="preto">
      <div className="princ">
        <Logo page={page} />
        <p className="pInfo">Centralize o controle de suas finanças</p>
        <p className="pDeta">de forma rápida e segura</p>
        <button onClick={() => setPage(true)}>Iniciar</button>
      </div>
      <img src={background} alt="Imagem ilustrativa" />
    </div>
  );
};
