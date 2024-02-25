import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useCheckIsChecking = () => {
  // Usar useSelector para acceder al estado de Redux y obtener el valor de 'status' de la autenticación
  const authStatus = useSelector((state) => state.auth.status);
  // Definir un estado local para almacenar el estado de autenticación
  const [checking, setChecking] = useState(false);

  // Utilizar useEffect para actualizar el estado local cada vez que cambie el estado de autenticación en Redux
  useEffect(() => {
    // Verificar si el estado de autenticación es igual a "authenticated"
    if (authStatus === "checking") {
        setChecking(true);
    } else {
        setChecking(false);
    }
  }, [authStatus]); // Se ejecutará cada vez que cambie authStatus

  // Devolver el estado de autenticación
  return checking;
};
