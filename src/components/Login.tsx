import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean,
  token: string | null,
  userName: string,
  nombre: string
}

const initialState: AuthState = {
  validando: true,
  token: null,
  userName: '',
  nombre: ''
}

type loginActionPayload = {
  userName: string,
  nombre: string
}

type AuthAction =
  | { type: 'logout' }
  | { type: 'login', payload: loginActionPayload }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validando: false,
        token: null,
        nombre: '',
        userName: '',
      }
    case 'login':
      return {
        validando: false,
        token: '123213123213',
        nombre: action.payload.nombre,
        userName: action.payload.userName,
      }
    default:
      return state;
  }
}

export const Login = () => {

  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' })
    }, 1500)
  }, []);

  if (state.validando) {
    return (
      <>
        <h2>Login</h2>
        <div className="alert alert-info">Validando...</div>
      </>
    )
  }

  const loginDispatch = () => {
    dispatch({ type: 'login', payload: { nombre: 'Jose', userName: 'jnusankoala' } })
  };

  const logoutDispatch = () => {
    dispatch({ type: 'logout' })
  };

  return (
    <>
      <h2>Login</h2>


      {
        (state.token) ?
          <div className="alert alert-success">Autenticado como: {state.nombre}</div> :
          <div className="alert alert-danger">No autenticado!</div>
      }

      {
        (state.token) ?
          <button className="btn btn-danger" onClick={() => logoutDispatch()}>Log out</button> :
          <button className="btn btn-primary" onClick={() => loginDispatch()}>Login</button>
      }
    </>
  )
}
