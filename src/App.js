import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/LandingPage";
function App() {
  const [listTransactoins, setListTransactions] = useState([]);
  const [filtrados, setFiltrados] = useState(listTransactoins); // filtros

  return (
    <div className="App">
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/painel-de-controle">
            <Header />
            <>
              <>
                <Form
                  listTransactoins={listTransactoins}
                  setListTransactions={setListTransactions}
                  setFiltrados={setFiltrados}
                  filtrados={filtrados}
                ></Form>
                <List
                  listTransactoins={listTransactoins}
                  filtrados={filtrados}
                  setFiltrados={setFiltrados}
                  setListTransactions={setListTransactions}
                />
              </>
            </>
          </Route>
        </Switch>
      </>
    </div>
  );
}

export default App;
