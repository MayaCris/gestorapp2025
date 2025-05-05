import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { DashBoard } from "../pages/DashBoard/Dashboard"
import { Menu } from "../common/Menu/Menu"
import { Booking } from "../pages/Booking/Booking"
import { Footer } from "../common/Footer/Footer"
import { NotFound } from "../pages/NotFound/NotFound"
import { Prueba } from "../pages/Prueba/Prueba"
import { FormularioReserva } from "../common/FormularioReserva/FormularioReserva"
import { Dashv2 } from "../pages/DashBoard/Dashv2"
import { Galeria } from "../pages/Galeria/Galeria"

export function Router(){
    return(
        <>
            <Menu></Menu>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/dash" element={<DashBoard/>}></Route>
                <Route path="/dashv2" element={<Dashv2/>}></Route>
                <Route path="/booking" element={<Booking/>}></Route>
                <Route path="/pepe" element={<Prueba/>}></Route>
                <Route path="/formulario" element={<FormularioReserva/>}></Route>
                <Route path="/reservas" element={<FormularioReserva/>}></Route>
                <Route path="/galeria" element={<Galeria/>}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer></Footer>
        </>
    )
}