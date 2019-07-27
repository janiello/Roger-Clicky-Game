import React from "react";
import "./roger-cards.css"

function Roger(props) {
    return (
        <div className="card text-center">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="persona">
                <h3>
                    <strong>{props.name}</strong>
                </h3>
                <h6>
                    <p>{props.role}</p>
                </h6>
            </div>
        </div>
    );
};

export default Roger;