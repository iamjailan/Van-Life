import React from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const HostDetails = () => {
    const {currentVan} = useOutletContext()

    return (
        <div className="vans--details">
            <h1 className="vans--details--h1">Name: <span className="vans--details--span">{currentVan.name}</span></h1>
            <h1 className="vans--details--h1">Category: <span className="vans--details--span">{currentVan.type}</span></h1>
            <h1 className="vans--details--h1">Description: <span className="vans--details--span">{currentVan.description}</span></h1>
            <h1 className="vans--details--h1">Visibility: <span className="vans--details--span">Public</span></h1>
        </div> 
    )
}

export default HostDetails