import "./styles.css";
import { Logo } from "../Logo";

export const Header = ({ page }) => {
  return (
    <header>
      <div className="content">
        <Logo page={page} />
        <button>Inicio</button>
      </div>
    </header>
  );
};
