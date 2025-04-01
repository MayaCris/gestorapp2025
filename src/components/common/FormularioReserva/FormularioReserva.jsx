import { useState, useEffect } from "react"



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

    useEffect(()=>{
        if(formularioEnviado){
            console.log(reserva)
        }
    }, [formularioEnviado, reserva])

    function capturaDatosFormulario(e){
        e.preventDefault()
        let datosFormulario = {
            responsable: responsableReserva,
            apartamento: apartamento,
            telefono: telefono,
            correo: correo,
            dia: diaReserva,
            hora: horaReserva,
            consideraciones: consideraciones

        }
        setFormularioEnviado(true)
        setReserva(datosFormulario)
    }

    return (
        <>
            <br />
            <section className="container mt-5">
                <section className="row">
                    <section className="col-12 col-md-8">
                        <h3>Registra tu reserva</h3>
                        <hr />
                        <form className="border rounded p-4 shadow" onSubmit={(e) =>{ capturaDatosFormulario(e)}}>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    <i className="bi bi-person-circle"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Cliente"
                                    value={responsableReserva}
                                    onChange={(e) => setResponsableReserva(e.target.value)}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
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
                                <span className="input-group-text" id="basic-addon1">
                                    <i className="bi bi-phone-vibrate-fill"></i>
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Número de teléfono"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    <i className="bi bi-calendar-event-fill"></i>
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Correo Electrónico"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    <i className="bi bi-calendar-event-fill"></i>
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Día Reserva"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    <i className="bi bi-clock-fill"></i>
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Hora Reserva"
                                />
                            </div>
                            <div>
                                <div className="form-floating mb-3">
                                    <textarea
                                        className="form-control"
                                        id="floatingTextarea">

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