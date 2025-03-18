import { useState, useEffect } from "react"

export const Prueba = () => {

    const [contador, setContador]= useState(0)

    useEffect(()=>{
        alert("Ahhhhhh cambiaron al contador. Los EF!!!!!!!!")
    },[contador])

    function sumar(){
        setContador(contador+1)
    }

    function restar(){
        setContador(contador-1)
    }

    return(
        <>
            <br/>
            <br/>
            <h2 className="my-5">El contador está en: {contador} </h2>   
            <button onClick={sumar} className="btn btn-primary my-5">Incrementar </button>     
            <button onClick={restar} className="btn btn-danger my-5">Decrementar </button>     
        </>
    )
}