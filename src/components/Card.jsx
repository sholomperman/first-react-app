import React from "react"
import css from "./card.module.css"

export default function Card(props){
    return (
        <div className="h-50 w-48 bg-pink-600 flex flex-col justify-center items-center">
                {props.Children}
        </div>
        
    )
}
