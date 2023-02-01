import React, { useState } from 'react'
import './quotebox.css'
import qoute from '../JSON/qoute.json'

const QuoteBox = ({NewColor,setNewColor,functionRandocolor}) => {
    const funcionNumberRando = () => {
        const Rando = Math.ceil(Math.random() * qoute.length - 1)
        return Rando
    }
    const [Getrando, setGetrando] = useState(qoute[funcionNumberRando()])
    const functionRando = () => {
        setGetrando(qoute[funcionNumberRando()])
        setNewColor(functionRandocolor)
    }
    return (
        <div className='Card' style={{ color: `${NewColor}` }}>
            <div className='qoute-main'>
                <i className='bx bxs-quote-alt-left'></i>
                <p className='qoute'>{Getrando.quote}</p>
            </div>
            <div className='Autor-main'>
                <p>{Getrando.author}</p>
                <button style={{ backgroundColor: `${NewColor}` }} onClick={functionRando}><i className='bx bxl-slack'></i></button>
            </div>
        </div>
    )
}

export default QuoteBox