import { useNavigate } from 'react-router-dom';
/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';

// export const DashBoard=()=>{

// return(

//     <>
//         <br /><br /><br /><br /><br />
//         <h1>Holas soy el dash</h1>
//     </>
// )

// }

export const Home2 = ({
    title = "Urbanización los Pinos",
    subtitle = "Reserva tus espacios favoritos en solo unos clicks",
    backgroundImage = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80",
    ctaText = "Reserva ahora",
}) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/booking");
    }
    return (
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
                    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                }}
            ></div>
        </div>
    );
};

