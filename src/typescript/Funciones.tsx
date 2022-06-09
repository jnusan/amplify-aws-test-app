export const Funciones = () => {

  const sumar = (): number => {
    return 10 + 500;
  }

  const sumar2 = (a: number, b: number): number => {
    return a + b;
  }

  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado es: { sumar2(500,9000) } </span>
    </>
  )
}
