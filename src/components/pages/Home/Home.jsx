/* eslint-disable react/prop-types */

// import { Banner } from "../../common/Banner/Banner"
// import { Acerca } from "../../common/Acerca/Acerca"
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Sparkles } from 'lucide-react';

export const Home = ({
    title = "Urbanización los Pinos",
    subtitle = "Reserva tus espacios favoritos en solo unos clicks",
    backgroundImage = "../../../../src/assets/img/fp_piscina2.png",
    //backgroundImage = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80",
    ctaText = "Reserva ahora",
}) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/booking");
    }

    const features = [
        {
            icon: Calendar,
            title: 'Reserva fácil',
            description: 'Reserva los espacios comunes con solo unos clics. Actualizaciones de disponibilidad en tiempo real.',
        },
        {
            icon: Users,
            title: 'Primero la Comunidad',
            description: 'Conecta con los vecinos y comparte instalaciones increíbles.',
        },
        {
            icon: Sparkles,
            title: 'Espacios Premium',
            description: 'Acceso a comodidades premium bien mantenidas en tu unidad.',
        },
    ];

    const spaces = [
        {
            name: 'Piscina',
            image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1600',
            description: 'Piscina de tamaño olímpico con zona de descanso',
        },
        {
            name: 'Zona BBQ',
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1600',
            description: 'Estación de parrila moderna con espacio para comer',
        },
        {
            name: 'Gimnasio',
            image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600',
            description: 'Equipo de última generación y área de entrenamiento',
        },
    ];


    return (

        <>

            {/* <Banner></Banner>
            <Acerca></Acerca> */}
            <div className="position-relative w-100" style={{ height: "500px" }}>
                <div
                    className="position-absolute top-0 start-0 end-0 bottom-0"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-dark opacity-50"></div>
                </div>

                <div className="position-relative h-100 container d-flex flex-column justify-content-center">
                    <div className="col-lg-8 col-xl-6">
                        <h1 className="display-4 fw-bold text-white mb-4">
                            Bienvenido a la <span className="text-primary">{title}</span>
                        </h1>
                        <p className="lead text-light mb-4">{subtitle}</p>
                        <button
                            className="btn btn-primary btn-lg d-inline-flex align-items-center"
                            onClick={handleNavigation}
                        >
                            {ctaText}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ms-2 arrow-icon"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </button>
                        <style>
                            {`
                .btn:hover .arrow-icon {
                  transform: translateX(4px);
                  transition: transform 0.3s;
                }
              `}
                        </style>
                    </div>
                </div>

                <div
                    className="position-absolute bottom-0 start-0 end-0"
                    style={{
                        height: "64px",
                        background: "linear-gradient(to top, rgb(255, 255, 255), transparent)"
                    }}
                ></div>
            </div>
            <div className="container" style={{ marginTop: '100px' }}>
                {/* Hero Section */}
                {/* <div className="text-center">
                    <h1 className="display-4 fw-bold text-dark">
                        Bienvenido a la <span className="text-primary">Urbanización los Pinos</span>
                    </h1>
                    <p className="mt-3 mx-auto lead text-muted">
                        Gestiona las reservas de tus espacios fácilmente y disfruta con tus amigos.
                    </p>
                    <div className="mt-4 ">
                        <a
                            href="/booking"
                            className="btn btn-primary btn-lg"
                        >
                            Reserva ahora
                        </a>
                    </div>
                </div> */}

                {/* Features Section */}
                <div className="py-1 bg-light rounded-lg shadow-sm mt-5">
                    <div className="container">
                        <div className="text-center">
                            <p className="text-primary fw-bold fs-3 text-uppercase">Características</p>
                            <p className="mt-3 py-1 display-5 font-weight-bold text-dark">
                                Una mejor manera de disfrutar los espacios comunes
                            </p>
                        </div>

                        <div className="mt-2 row py-5 ">
                            {features.map((feature) => (
                                <div key={feature.title} className="col-md-4 text-center align-items-center justify-content-center ">
                                    <div className="d-block mx-auto justify-content-center align-items-center bg-primary text-white rounded-circle" style={{ width: '50px', height: '50px' }}>
                                        <feature.icon className="mx-auto d-blockk mt-2" />
                                    </div>
                                    <h3 className="mt-3 h5 font-weight-bold text-dark">{feature.title}</h3>
                                    <p className="mt-2 text-muted ">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Spaces Preview */}
                <div className="bg-ligth rounded-lg shadow-sm overflow-hidden mt-5">
                    <div className="container py-5">
                        <h2 className="display-5 font-weight-bold text-dark text-center">
                            Espacios disponibles
                        </h2>
                        <div className="mt-4 row">
                            {spaces.map((space) => (
                                <div key={space.name} className="col-md-4 mb-4">
                                    <div className="card h-100">
                                        <img src={space.image} alt={space.name} className="card-img-top" />
                                        <div className="card-body">
                                            <h3 className="card-title h5 font-weight-bold text-dark">{space.name}</h3>
                                            <p className="card-text text-muted">{space.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}