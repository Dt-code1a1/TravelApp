import React from "react"
import pathIcon from "../assets/Path.svg"

export default function Card(props) {
    return(
        <>
        <div className="card">
            <img src={props.travel.image} className="landscape__photo"/>
            <div className="desc">
                <p className="location"><img src={pathIcon}/><span>{props.travel.location}</span> <a href="https://www.google.pl/maps/" target="_blank">View on Google Maps</a></p>
                <h1>{props.travel.title}</h1>
                <h3>{props.travel.date}</h3>
                <p className="place__desc">{props.travel.description}</p>
            </div>
        </div>
        {props.travel.id !== 3 && <hr/>}
        </>
    )
}

