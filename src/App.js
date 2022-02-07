import "./App.css";
import { useState } from "react";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { TotalMoney } from "./components/TotalMoney";
import { Header } from "./components/Header";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  const saveTransaction = (input) => {
    // const newTrans = {description:desc,type:type,value:value}
    console.log(listTransactions);
    typeof input.value != "number"
      ? (input.value = parseInt(input.value))
      : (input.value = input.value);
    setListTransactions([...listTransactions, input]);
    console.log(listTransactions);
  };

  return (
    <div className="main">
      <Header />
      <div className="Container">
        <div className="leftColumn">
          <Form
            transactions={listTransactions}
            setTransections={setListTransactions}
            saveTransaction={saveTransaction}
          />
          <TotalMoney transactions={listTransactions} />
        </div>
        <List transactions={listTransactions} />
      </div>
    </div>
  );
}

export default App;
