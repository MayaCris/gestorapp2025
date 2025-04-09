import { useState, useEffect, act } from "react"
import { useLocation } from "react-router-dom"
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import "./Formulario.css"



export function FormularioReserva() {
    const [responsableReserva, setResponsableReserva] = useState("")
    const [apartamento, setApartamento] = useState("")
    const [telefono, setTelefono] = useState("")
    const [correo, setCorreo] = useState("")
    const [diaReserva, setDiaReserva] = useState("")
    const [horaReserva, setHoraReserva] = useState("")
    const [consideraciones, setConsideraciones] = useState("")
    const [reserva, setReserva] = useState("")
    const [formularioEnviado, setFormularioEnviado] = useState(false)

    const receptor = useLocation()

    const { newReservation } = receptor.state || {}

    useEffect(() => {
        if (newReservation) {
            setDiaReserva(newReservation.date)
            setHoraReserva(newReservation.time)
        }
    }, [newReservation])

    useEffect(() => {
        console.log("Nos fuimos para el API")
    }, [formularioEnviado])

    useEffect(() => {
        const reservasAnteriores = localStorage.getItem('reservas')
        if (reservasAnteriores) {
            setReserva(JSON.parse(reservasAnteriores))
        }
    }, [])

    function crearReserva(e) {
        e.preventDefault()
        let datosFormulario = {
            responsable: responsableReserva,
            apartamento: apartamento,
            telefono: telefono,
            correo: correo,
            consideraciones: consideraciones
        }

        if (datosFormulario && newReservation) {
            const reservaCompleta = { ...newReservation, ...datosFormulario }
            const actualizarReservas = [...reserva, reservaCompleta]
            setReserva(actualizarReservas)
            localStorage.setItem('reservas', JSON.stringify(actualizarReservas))

            setResponsableReserva("")
            setApartamento("")
            setTelefono("")
            setCorreo("")
            setConsideraciones("")
            setDiaReserva("")
            setHoraReserva("")

            setFormularioEnviado(true)
            Swal.fire({
                title: 'Reserva confirmada',
                text: `Tu reserva de ${newReservation.spaceName} para el \n${diaReserva}, \n${horaReserva} ha sido confirmada`,
                icon: 'success',
            });
        } else {
            Swal.fire({
                title: '',
                text: 'Por favor validar los campos del formulario',
                icon: 'warning',
            });
        }
    }


    return (
        <>
            <br />
            <br />
            <br />
            <section className="container mt-5 mb-5 ">
                <section className="row justify-content-center">
                    <section className="col-12 col-md-6">

                        <h3 className="text-primary">Registra tu reserva</h3>
                        <hr />
                        <div className="btn mt-0 mp-0">
                            <Link className="nav-link mb-3 text-primary hover-warning" to="/booking">
                                ← Back to spaces
                            </Link>
                        </div>

                        <form className="border rounded p-4 shadow" onSubmit={(e) => { crearReserva(e) }}>

                            <div className="input-group mb-3">
                                <span className="input-group-text" >
                                    <i className="bi bi-person-circle"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Responsable de la Reserva"
                                    value={responsableReserva}
                                    onChange={(e) => setResponsableReserva(e.target.value)}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" >
                                    <i className="bi bi-buildings-fill"></i>
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Número de Apartamento"
                                    value={apartamento}
                                    onChange={(e) => setApartamento(e.target.value)}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" >
                                    <i className="bi bi-phone-vibrate-fill"></i>
                                </span>
                                <input
                                    type="phone"
                                    className="form-control"
                                    placeholder="Número de teléfono"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" >
                                    <i className="bi bi-calendar-event-fill"></i>
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo Electrónico"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" >
                                    <i className="bi bi-calendar-event-fill"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Día Reserva"
                                    value={diaReserva}
                                    readOnly
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" >
                                    <i className="bi bi-clock-fill"></i>
                                </span>
                                <input
                                    type="hour"
                                    className="form-control"
                                    placeholder="Hora Reserva"
                                    value={horaReserva}
                                    readOnly
                                />
                            </div>
                            <div>
                                <div className="form-floating mb-3">
                                    <textarea
                                        className="form-control"
                                        id="floatingTextarea"
                                        value={consideraciones}
                                        onChange={(e) => setConsideraciones(e.target.value)}
                                    >

                                    </textarea>
                                    <label >Consideraciones</label>
                                </div>
                            </div>

                            <button
                                className="btn btn-outline-primary w-100"
                                type="submit">
                                Reservar</button>
                        </form>
                    </section>
                    <section className="col-12 col-md-4">
                        <img src="../../../../src/assets/img/reserva.png" alt="reserva" className="img-fluid" />
                    </section>
                </section>
            </section>
        </>
    )
}