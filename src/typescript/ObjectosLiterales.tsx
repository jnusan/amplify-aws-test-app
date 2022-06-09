interface IPersona {
  nombre: string;
  edad: number;
  direccion: IDireccion;
}

interface IDireccion {
  pais: string
}

export const ObjectosLiterales = () => {
  
  const persona: IPersona = {
    nombre: 'Jose',
    edad: 27,
    direccion: {
      pais: 'CR'
    }
  }

  return (
    <>
      <h3>Objetos literales</h3>
      <code>
        <pre>
          { JSON.stringify(persona, null ,2) }
        </pre>
      </code>
    </>
  )
}
