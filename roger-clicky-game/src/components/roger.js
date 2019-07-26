import React from "react";

function Roger(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="persona">
                <ul>
                    <li>
                        <strong>{props.name}</strong>
                    </li>
                    <li>
                        <p>{props.role}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Roger;