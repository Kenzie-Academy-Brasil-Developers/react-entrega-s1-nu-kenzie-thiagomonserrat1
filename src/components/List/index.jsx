import "./style.css";
import { useEffect, useState } from "react";
import { Card } from "../Card";

export const List = ({ transactions, remove, seleciona }) => {
  console.log(transactions);

  return (
    <div className="li">
      <header>
        <h2>Resumo Financeiro</h2>
        <div className="buttons">
          <button onClick={() => seleciona("todos")}>Todos</button>
          <button onClick={() => seleciona("entra")}>Entradas</button>
          <button onClick={() => seleciona("sai")}>Saidas</button>
        </div>
      </header>
      {transactions.map((transaction, index) => {
        return (
          <Card trans={transaction} key={index} props={index} remov={remove} />
        );
      })}
    </div>
  );
};
