import "./style.css";
import { FaTrash } from "react-icons/fa";
export const Card = ({ trans, remov, props }) => {
  return (
    <div className="car">
      <div className="transType">
        <h3>{trans.description}</h3>
        <p>{trans.type}</p>
      </div>
      <div className="removValue">
        <p>
          <span>R$</span>
          {trans.value < 0 ? trans.value * -1 : trans.value}
        </p>
        <button onClick={() => remov(props)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
