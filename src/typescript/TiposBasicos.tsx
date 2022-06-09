
export const TiposBasicos = () => {

  const nombre: string = 'Jose';
  const edad: number = 27;
  const estaActivo: boolean = false;
  const poderes: string[] = ['Velocidad', 'Aprender', 'Resolver problemas'];

  return (
    <>
      <h1>Tipos Basicos</h1>
      { nombre }, {  edad } , { (estaActivo) ? 'activo' : 'no activo' }
      <br />
      { poderes.join(' - ') }
    </>
  )
}

