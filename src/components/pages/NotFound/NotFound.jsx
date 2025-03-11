import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/"); // Redirige a la página principal después de 3 segundos
    }, 3000);
  }, [navigate]);

  return <h1>404 - Página no encontrada. Redirigiendo...</h1>;
}

