import React from 'react'
import "./card.css"
const Card = (props) => {
    return (
        <div className='cards' style={{ overflow: "hidden" }}>
            <img src="a.png" alt="" width={300}
                style={{ border: "2px solid black" }} />
            <h1>{props.title}</h1>
            <p>{props.description}</p>


        </div>
    )
}
export default Card


