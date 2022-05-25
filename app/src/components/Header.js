import React from "react"
import world from "../assets/world.svg"

export default function Card() {
    return(
        <nav>
            <img src={world}/>
            <h2>my travel journal.</h2>
        </nav>
    )
}
