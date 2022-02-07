import "./styles.css";
import { FaTrash } from "react-icons/fa";

export const Card = ({ transaction }) => {
  return (
    <div className="Card">
      <div className="left">
        <h3>{transaction.description}</h3>
        <p>{transaction.type}</p>
      </div>
      <div className="right">
        <p>
          <span>R$</span>
          {transaction.value < 0 ? transaction.value * -1 : transaction.value}
        </p>
        <button>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
