
import React from "react"
import Card from "./Card"
import data from "./data"
import Header from "./Header"
export default function App() {
    const cards = data.map(travel => {
        return(
            <Card
                key = {travel.id}
                travel={travel}
            />
        )
    })

    return(
        <div className="container">
            <Header/>
            <main className="main__content">
                {cards}
            </main>
        </div>
    )
}

