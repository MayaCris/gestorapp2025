import { useEffect, useState } from "react";
import { datosCalendario } from "./datosCalendario"
import { Button, Card, Row, Col, Badge, Table, Container } from 'react-bootstrap';

export function Calendario() {


    const [dias, setDias] = useState([])
    const [horas, setHoras] = useState([])

    useEffect(() => {
        setDias(datosCalendario[0])
        setHoras(datosCalendario[1])
    }, [dias, horas])

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
                                                <button className="btn btn-success">Reservar</button>
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