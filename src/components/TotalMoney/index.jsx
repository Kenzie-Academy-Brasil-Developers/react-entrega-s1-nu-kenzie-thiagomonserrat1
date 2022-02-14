import "./style.css";
export const TotalMoney = ({ transactions }) => {
  const total = () => {
    return transactions.reduce((total, atual) => total + atual.value, 0);
  };
  console.log(transactions);
  return (
    <div className="total">
      z<p>Valor total:</p>
      <p>
        <span>$</span>
        {total()}
      </p>
    </div>
  );
};
