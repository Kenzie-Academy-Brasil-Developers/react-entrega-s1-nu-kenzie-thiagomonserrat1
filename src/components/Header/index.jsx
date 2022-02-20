import Logo from "../Imagens/logo.png";
import "./style.css";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <header>
      <img src={Logo} alt="Logo"></img>
      <button onClick={() => history.push("/")}>Inicio</button>
    </header>
  );
};

export default Header;
