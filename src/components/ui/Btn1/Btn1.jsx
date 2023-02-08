import React from 'react'
import "./Btn1.scss"

export default function Btn1({ text, func, style }) {
    return (
        <button className="Btn1" style={style} onClick={() => func()}>{text}</button>
    )
}