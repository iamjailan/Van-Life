import React from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const VansPricing = () => {
    const {currentVan} = useOutletContext()
    return (
        <div className="vans--pricing">
            <h1>${currentVan.price}<span>/day</span></h1>
        </div> 
    )
}

export default VansPricing