import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { IReqRes, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const paginaActualRef = useRef(1); 

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<IReqRes>('/users', {
      params: {
        page: paginaActualRef.current
      }
    });
    if(resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
    } else {
      paginaActualRef.current--;
      alert('no mas registros...');
    }
  }

  const paginaAnterior = async () => {
    if(paginaActualRef.current > 1) {
      paginaActualRef.current--;
      cargarUsuarios();
    }
  }

  const paginaSiguiente = async () => {
      paginaActualRef.current++;
      cargarUsuarios();
  }

  return {
    usuarios,
    paginaAnterior,
    paginaSiguiente
  }
}
