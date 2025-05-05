import "./Menu.css";
import { Link } from "react-router-dom";
import { SquareDashedKanban } from 'lucide-react';

export function Menu() {
  return (
    <>
      <nav className="bg-dark navbar navbar-expand-lg menu navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
          <SquareDashedKanban size={40} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booking">
                  Booking
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashv2">
                  DashBoard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/formulario">
                  Formulario
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/galeria">
                  Galeria
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
