import { useState, useEffect } from 'react';
import { Modal, Button, Card, Row, Col, Form } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { datosAPI } from '../DashBoard/DatosJSON';
import { useNavigate } from "react-router-dom";



export function Booking() {
    const [reservation, setReservation] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedSpace, setSelectedSpace] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [availableTime, setAvailableTime] = useState([]);
    const [currentSpace, setCurrentSpace] = useState(null);
    const [selectedDay, setSelectedDay] = useState('');

    const navegador = useNavigate();

    useEffect(() => {
        const bookedReservations = localStorage.getItem('reservas');
        if (bookedReservations) {
            setReservation(JSON.parse(bookedReservations));
        }
    }, []);

    useEffect(() => {
        if (selectedDate) {

            const parts = selectedDate.split('-');
            const year = parseInt(parts[0]);
            const month = parseInt(parts[1]) - 1; // Los meses en JS van de 0 a 11
            const day = parseInt(parts[2]);
            const dateObj = new Date(year, month, day);
            const daysWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
            const dayName = daysWeek[dateObj.getDay()];
            setSelectedDay(dayName);
        }
    }, [selectedDate]);

    useEffect(() => {
        if (!currentSpace || !selectedDate || !selectedDay) {
            setAvailableTime([]);
            return;
        }
        const scheduleDay = currentSpace.horarios.find((horario) =>
            typeof horario.dia === 'string' ? horario.dia === selectedDay : horario.dia === selectedDay);

        if (!scheduleDay) {
            setAvailableTime([]);
            Swal.fire({
                title: 'Lo sentimos',
                text: 'No hay horarios disponibles para esta fecha',
                icon: 'warning',
            });
            return;
        }

        let allHours = scheduleDay.franjas || [];
        if (!allHours.length && scheduleDay.hora)
            allHours = scheduleDay.hora.map(hora => {
                const [inicio, fin] = hora.split(' - ');
                return { inicio, fin };
            });

        const bookedHours = reservation.filter((r) =>
            r.spaceId === parseInt(currentSpace.id) &&
            r.date === selectedDate
        ).map((r) => r.time);

        const available = allHours.filter(hour => {
            const hourString = `${hour.inicio}-${hour.fin}`;
            return !bookedHours.includes(hourString);
        });

        setAvailableTime(available);

        if (available.length === 0) {
            Swal.fire({
                title: 'Lo sentimos',
                text: 'No hay horarios disponibles para esta fecha',
                icon: 'warning',
            });
        }
    }, [currentSpace, selectedDay, selectedDate, reservation, selectedSpace]);

    const createReservation = (e) => {
        e.preventDefault();

        const hourBooked = reservation.some(r =>
            r.spaceId === parseInt(selectedSpace.id) &&
            r.date === selectedDate &&
            r.time === selectedTime
        );
        if (hourBooked) {
            Swal.fire({
                title: 'Lo sentimos',
                text: 'Este horario ya ha sido reservado',
                icon: 'warning',
            });
            return;
        }

        const newReservation = {
            id: Date.now().toString(),
            spaceId: parseInt(selectedSpace.id),
            spaceName: currentSpace.nombre,
            date: selectedDate,
            time: selectedTime,
            state: 'Confirmada',
            created: new Date().toISOString(),
        };

        navegador("/formulario",{state:{newReservation}})

    }

    

    const handleOpenModal = (space) => {
        setSelectedSpace(space);
        setCurrentSpace(space);
        setShowModal(true);
        // 
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedSpace(null);
        setCurrentSpace(null);
        setSelectedDate('');
        setSelectedTime('');
        setSelectedDay('');
    };
   

    const today = new Date().toISOString().split('T')[0];
    return (

        <div className="container py-5">
            <br />
            <br />
            <h1 className="text-center text-primary mb-5">Reserva de Espacios</h1>

            <p className="text-center mb-5">
                Aquí puedes seleccionar cada uno de los espacios y agendar tu reserva según disponibilidad.
            </p>

            <Row xs={1} md={2} lg={3} className="g-4">
                {datosAPI.map((space) => (
                    <Col key={space.id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={space.imagen} alt={space.nombre} />
                            <Card.Body>
                                <Card.Title>{space.nombre}</Card.Title>
                                <Card.Text>{space.descripcion}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg-white border-0">
                                <Button
                                    variant="primary"
                                    className="w-100"
                                    onClick={() => handleOpenModal(space)}
                                >
                                    Agendar
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
                {selectedSpace && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedSpace.nombre}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col md={5}>
                                    <img
                                        src={selectedSpace.imagen}
                                        alt={selectedSpace.nombre}
                                        className="img-fluid rounded mb-3"
                                    />
                                </Col>
                                <Col md={7}>
                                    <h5>Descripción</h5>
                                    <p>{selectedSpace.descripcion}</p>

                                    <h5 className="mt-4">Selecciona Fecha y Horario</h5>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Fecha</Form.Label>
                                            <Form.Control
                                                type="date"
                                                min={today}
                                                value={selectedDate}
                                                onChange={(e) => setSelectedDate(e.target.value)}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Horario Disponible</Form.Label>
                                            <Form.Select
                                                value={selectedTime}
                                                onChange={(e) => setSelectedTime(e.target.value)}
                                                disabled={availableTime.length === 0}
                                                required
                                            >
                                                <option value="">Selecciona un horario</option>
                                                {availableTime.map((time, index) => (
                                                    <option key={index} value={`${time.inicio}-${time.fin}`}>
                                                        {`${time.inicio} - ${time.fin}`}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Cancelar
                            </Button>
                            <Button
                                variant="primary"
                                onClick={createReservation}
                                disabled={!selectedDate || !selectedTime || !selectedSpace}
                            >
                                Continuar con la reserva
                            </Button>
                        </Modal.Footer>

                    </>
                )}
            </Modal>
            
        </div>
    );
}
