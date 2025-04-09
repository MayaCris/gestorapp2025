import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
export function Footer() {
    return (
        <footer className="bg-dark text-light py-4 mt-auto w-100 bottom-0">
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-4">
                        <h5 className="mb-3 text-primary">Urbanización Los Pinos</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <MapPin className="inline-block mr-2" size={18} />
                                <span> </span>
                                Calle Principal #123, Envigado, Antioquia
                            </li>
                            <li className="mb-2">
                                <Phone className="inline-block mr-2" size={18} />
                                <a href="tel:+573001234567" className="text-light text-decoration-none">
                                    <span> </span>
                                    +57 300 123 4567
                                </a>
                            </li>
                            <li className="mb-2">
                                <Mail className="inline-block mr-2" size={18} />
                                <a href="mailto:contacto@lospinos.com" className="text-light text-decoration-none">
                                    <span> </span>
                                    contacto@lospinos.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="mb-3 text-primary">Enlaces Rápidos</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/booking" className="text-light text-decoration-none hover:text-primary">
                                    Espacios Disponibles
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/dashv2" className="text-light text-decoration-none hover:text-primary">
                                    Mis Reservas
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/reglamento" className="text-light text-decoration-none hover:text-primary">
                                    Reglamento
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/contacto" className="text-light text-decoration-none hover:text-primary">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="mb-3 text-primary">Horarios de Atención</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Clock className="inline-block mr-2" size={18} />
                                <span> </span>
                                Lunes a Viernes: 8:00 AM - 6:00 PM
                            </li>
                            <li className="mb-2">
                                <Clock className="inline-block mr-2" size={18} />
                                <span> </span>
                                Sábados: 9:00 AM - 2:00 PM
                            </li>
                            <li className="mb-2">
                                <Clock className="inline-block mr-2" size={18} />
                                <span> </span>
                                Domingos y Festivos: Cerrado
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        <hr className="border-secondary" />
                        <p className="text-center mb-0">
                            © {new Date().getFullYear()} Urbanización Los Pinos. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};