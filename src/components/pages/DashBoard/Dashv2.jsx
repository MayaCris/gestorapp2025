import { useState, useEffect } from 'react';
// import { commonSpaces, timeSlots } from '../data';
import { datosAPI, franjas } from "../DashBoard/DatosJSON"



export function Dashv2() {
    const [reservas, setReservas] = useState([]);
    const [fechaSeleccionada, setFechaSeleccionada] = useState([])
    const [espacioSeleccionado, setEspacioSeleccionado] = useState(datosAPI[0].id);


    useEffect(() => {
            const reservasPrevias = localStorage.getItem('reservas');
            if (reservasPrevias) {
                const dataParseada = JSON.parse(reservasPrevias)
                setReservas(dataParseada);
            }
        }, []);

    return (
        <>
            <div className="min-vh-100 bg-light py-5">
                <div className="container">
                    <div className="bg-white rounded shadow p-4">
                        <h1 className="display-5 fw-bold mb-4 text-primary">Dashboard</h1>

                        <div className="row mb-4">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <label className="form-label">Seleccionar Fecha</label>
                                <input
                                    type="date"
                                    value={fechaSeleccionada}
                                    onChange={(e) => setFechaSeleccionada(e.target.value)}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Seleccionar Espacio</label>
                                <select
                                    value={espacioSeleccionado}
                                    onChange={(e) => setEspacioSeleccionado(Number(e.target.value))}
                                    className="form-select"
                                >
                                    {datosAPI.map((space) => (
                                        <option key={space.id} value={space.id}>
                                            {space.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Horario</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Residente</th>
                                        <th scope="col">Apartmento</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {franjas.map((hora, index) => {
                                        const horaCompleta = (`${hora.inicio}-${hora.fin}`)
                                        console.log("Buscando tiempo:", horaCompleta);
                                        console.log("Espacio seleccionado:", espacioSeleccionado);
                                        console.log("Fecha seleccionada:", fechaSeleccionada);
                                        const horaReservada = reservas.find(b => 
                                            b.spaceId === espacioSeleccionado && 
                                            b.time === horaCompleta &&
                                            b.date === fechaSeleccionada &&
                                            b.state === 'Confirmada')
                                        console.log("horaReservada",horaReservada)

                                        
                                        return (
                                            <tr key={index}>
                                                <td className="fw-medium">{horaCompleta}</td>
                                                <td>
                                                    <span
                                                        className={`badge ${horaReservada
                                                                ? 'bg-danger'
                                                                : 'bg-success'
                                                            }`}
                                                    >
                                                        {horaReservada ? 'Reservado' : 'Disponible'}
                                                    </span>
                                                </td>
                                                <td>{horaReservada?.responsable || '-'}</td>
                                                <td>{horaReservada?.apartamento || '-'}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}