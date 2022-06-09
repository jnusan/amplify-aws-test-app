import { useUsuarios } from '../hooks/useUsuarios';
import { Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {

  const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();

  const renderItem = (usuario: Usuario) => {
    return (
      <tr key={usuario.id}>
        <td>
          <img src={usuario.avatar} alt={usuario.first_name}
          style={{ 
            width: 50,
            borderRadius: 100
          }}/>
        </td>
        <td>{ usuario.first_name } { usuario.last_name }</td>
        <td>{ usuario.email }</td>
      </tr>
    )
  }
  
  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map(renderItem)
          }
        </tbody>
      </table>

      <button className="btn btn-primary" onClick={ paginaAnterior } >
        Anterior
      </button>
      <hr />
      <button className="btn btn-primary" onClick={ paginaSiguiente } >
        Siguiente
      </button>
    </>
  )
}
