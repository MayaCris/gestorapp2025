import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/"); // Redirige a la página principal después de 3 segundos
    }, 3000);
  }, [navigate]);

  return (
    <>
      <Container className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <h2 className="mb-4 text-muted">Página no encontrada</h2>
        <p className="mb-4">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <img
          src="https://http.cat/404"
          alt="Página no encontrada"
          className="img-fluid mb-4"
          style={{ maxWidth: "400px" }}
        />
        <Link to="/">
          <Button variant="primary" size="lg">
            Volver al inicio
          </Button>
        </Link>
      </Container>
    </>
  )
}

