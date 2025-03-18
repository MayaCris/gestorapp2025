import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { DashBoard } from "../pages/DashBoard/Dashboard"
import { Menu } from "../common/Menu/Menu"
import { Booking } from "../pages/Booking/Booking"
import { Footer } from "../common/Footer/Footer"
import { NotFound } from "../pages/NotFound/NotFound"
import { Prueba } from "../pages/Prueba/Prueba"

export function Router(){
    return(
        <>
            <Menu></Menu>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/dash" element={<DashBoard/>}></Route>
                <Route path="/booking" element={<Booking/>}></Route>
                <Route path="*" element={<NotFound />} />
                <Route path="/pepe" element={<Prueba/>}></Route>
            </Routes>
            <Footer></Footer>
        </>
    )
}