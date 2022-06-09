import { useState } from "react";

export const useCounter = (valorInicial: number = 10) => {
  const [contador, setContador] = useState(valorInicial);
  const sumar = (numero: number):void => {
    setContador(contador+ numero);
  }
  const restar = (numero: number):void => {
    if(contador > 0) {
      setContador(contador - numero)
    }
  }

  return {
    restar,
    sumar,
    contador
  }

}
