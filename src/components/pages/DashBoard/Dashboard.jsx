import { useState, useEffect } from 'react';
import { Button, Card, Row, Col,  Badge, Table, } from 'react-bootstrap';
import { Calendario } from '../../common/Calendario/Calendario';
import Swal from 'sweetalert2'

export const DashBoard=()=>{

    const [reservation, setReservation] = useState([]);

    useEffect(() => {
        const bookedReservations = localStorage.getItem('reservas');
        if (bookedReservations) {
            setReservation(JSON.parse(bookedReservations));
        }
    }, []);

    const formatDate = (dateStr) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(`${dateStr}T12:00:00`);
        return date.toLocaleDateString('es-ES', options);
    };

    const cancelledReservation = (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'La reserva será cancelada',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, cancelar',
            cancelButtonText: 'No, volver',
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedReservations = reservation.map(r => r.id === id ? { ...r, state: 'Cancelada' } : r);
                setReservation(updatedReservations);
                localStorage.setItem('reservas', JSON.stringify(updatedReservations));
                Swal.fire('Reserva cancelada', '', 'success');
            }
        })
    }

return(

    <>
        <Row className="justify-content-center align-items-center" style={{ marginTop: '100px', marginBottom: '100px' }}>
                <Col lg={6}>
                    <Card>
                        <Card.Header>
                            <h4>Mis Reservas</h4>
                        </Card.Header>
                        <Card.Body>
                            {reservation.length === 0 ? (
                                <p className="text-center">No tienes reservas activas</p>
                            ) : (
                                <div className="table-responsive">
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Espacio</th>
                                                <th>Fecha</th>
                                                <th>Horario</th>
                                                <th>Estado</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {reservation
                                                .filter(r => r.state !== 'cancelada')
                                                .sort((a, b) => new Date(a.date) - new Date(b.date))
                                                .map(reservation => (
                                                    <tr key={reservation.id}>
                                                        <td>{reservation.spaceName}</td>
                                                        <td>{formatDate(reservation.date)}</td>
                                                        <td>{reservation.time}</td>
                                                        <td>
                                                            <Badge bg={reservation.state === 'confirmada' ? 'success' : 'warning'}>
                                                                {reservation.state}
                                                            </Badge>
                                                        </td>
                                                        <td>
                                                            <Button
                                                                variant="danger"
                                                                size="sm"
                                                                onClick={() => cancelledReservation(reservation.id)}
                                                            >
                                                                Cancelar
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </Table>
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Calendario></Calendario>
    </>
)

}



