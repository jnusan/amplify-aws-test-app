import { useFormulario } from "../hooks/useFormulario";

export const Formularios = () => {

  const { state, email, password , onChange } = useFormulario({
    email: 'email@email.com',
    password: '123456'
  });

  return (
    <>
      <h3>Formularios</h3>
      <input 
        type="text" 
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(event) => onChange(event.target.value, 'email')}
      />

      <input 
        type="text" 
        className="form-control mt-2 mb2"
        placeholder="Password"
        value={password}
        onChange={(event) => onChange(event.target.value, 'password')}
      />

      <code>
        <pre> { JSON.stringify(state, null, 2) } </pre>
      </code>
    </>
  )
} 
