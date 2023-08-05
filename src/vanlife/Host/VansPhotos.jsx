import React from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const VansPhotos = () => {
    const {currentVan} = useOutletContext()

    return (
        <div className="vans--image">
            <img src={currentVan.imageUrl} />
        </div> 
    )
}

export default VansPhotos