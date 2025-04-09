import { useEffect, useState } from "react";
import { datosCalendario } from "./datosCalendario"
import { Table, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { datosAPI } from "../../pages/DashBoard/DatosJSON";

export function Calendario() {


    const [dias, setDias] = useState([])
    const [horas, setHoras] = useState([])

    const navegador = useNavigate()

    useEffect(() => {
        setDias(datosCalendario[0])
        setHoras(datosCalendario[1])
    }, [])

    function crearReserva(dia, hora){
        navegador("/formulario",{state:{dia,hora}})
     }

    function estaOcupado(dia, hora){
        return datosAPI.some(function(espacio) {
            return espacio.horarios.some(function(reserva) {
                return reserva.dia === dia && reserva.franjas === hora;
            })
        })
    }

    return (
        <>
            <Container style={{ marginTop: '100px' }}>
                <h3 className="text-center">Calendario de Reservas</h3>
                <Table className=" table table-striped table-bordered table-hover table-sm" responsive="sm"  >
                    <caption>Calendario de Reservas</caption>
                    <thead>
                        <tr>
                            <th className="text-center">Hora</th>
                            {
                                dias.map((dia) => {
                                    return <th key={dia} className="text-center" > {dia}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            horas.map((hora) => {
                                return (
                                    <tr key={hora}>
                                        <td className="text-center">{hora}</td>
                                        {dias.map((dia) => (
                                            <td key={dia} className="text-center">
                                                <button 
                                                    className={`btn ${estaOcupado(dia, hora) ? "btn-danger" : "btn-success"} `}
                                                    onClick={() => crearReserva(dia, hora)}
                                                    >Reservar</button>
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )

}