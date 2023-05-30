import { useState } from 'react'
import './CampoTexto.css'

export const CampoTexto = (props) => {
    
    const placeholder = `Digite ${props.placeholder}`

   
    const [valor, setValor] = useState('')


    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholder}/>
        </div>
    ) 
}

