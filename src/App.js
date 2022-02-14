import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { useState } from "react";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { TotalMoney } from "./components/TotalMoney";
import { Header } from "./components/Header";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [expenses, setExpenses] = useState(false);
  const [page, setPage] = useState(false);
  const [todos, settodos] = useState(true);
  const selecionando = (select) => {
    if (select === "todos") {
      settodos(true);
      setExpenses(false);
    } else if (select === "sai") {
      settodos(false);
      setExpenses(true);
    } else if (select === "entra") {
      settodos(false);
      setExpenses(false);
    }
  };
  const filtrar = () => {
    return todos
      ? listTransactions
      : expenses
      ? listTransactions.filter((item) => item.type === "Saída")
      : listTransactions.filter((item) => item.type === "Entrada");
  };
  const guardarTrans = (inp) => {
    typeof inp.value != "number"
      ? (inp.value = parseInt(inp.value))
      : (inp.value = inp.value);
    setListTransactions([...listTransactions, inp]);
  };
  const remove = (index) => {
    setListTransactions(
      listTransactions.filter((item, index2) => index2 !== index)
    );
  };
  return (
    <>
      {page ? (
        <div className="divMain">
          <Header page={page} />
          <div className="Container">
            <div className="leftColumn">
              <Form
                transactions={listTransactions}
                setTransections={setListTransactions}
                saveTransaction={guardarTrans}
              />
              <TotalMoney transactions={listTransactions} />
            </div>
            <List
              transactions={filtrar()}
              remove={remove}
              seleciona={selecionando}
            />
          </div>
        </div>
      ) : (
        <LandingPage setPage={setPage} page={page} />
      )}
    </>
  );
}
export default App;
