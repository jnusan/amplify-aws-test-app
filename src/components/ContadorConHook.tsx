import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const ContadorConHook = () => {
  const { sumar, restar, contador } = useCounter();
  return (
    <>
      <h2>Contador con hook</h2>
      <h3>Contador: <small>{contador}</small></h3>
      <button className="btn btn-primary" onClick={() => sumar(1)}>+1</button>
      <button className="btn btn-danger"  onClick={() => restar(1)}>-1</button>
    </>
  )
}
