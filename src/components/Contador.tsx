import { useState } from "react";

export const Contador = () => {
  const [contador, setContador] = useState(0);

  const sumar = (numero: number):void => {
    setContador(contador+ numero);
  }
  const restar = (numero: number):void => {
    if(contador > 0) {
      setContador(contador - numero)
    }
  }
  return (
    <>
      <h2>Contador</h2>
      <h3>Contador: <small>{contador}</small></h3>
      <button className="btn btn-primary" onClick={() => sumar(1)}>+1</button>
      <button className="btn btn-danger"  onClick={() => restar(1)}>-1</button>
    </>
  )
}
