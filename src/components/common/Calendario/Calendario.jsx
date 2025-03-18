import { useEffect, useState } from "react";
import { datosCalendario } from "./datosCalendario"
import { Table } from  'react-bootstrap';

export function Calendario(){


    const [dias, setDias] = useState([])
    const [horas, setHoras] = useState([])

    useEffect(()=> {
        setDias(datosCalendario[0])
        setHoras(datosCalendario[1])
    })

    return(
        <>
            <Table className="">
                <thead>
                    <tr>
                        <th>Hora</th>
                        {
                            dias.map((dia)=> {
                                return <th> {dia}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            {
                                horas.map((hora)=> {
                                    return <tr>
                                        <td>{hora}</td>
                                        </tr>
                                        {
                                            dias.map((dia) =>{
                                                return <tr> 
                                                    <button clasName="btn btn-success">Reservar</button>
                                                </tr>
                                            })
                                        }
                                })
                            }
                        </th>
                    </tr>
                </tbody>
            </Table>

        </>
    )
    
}