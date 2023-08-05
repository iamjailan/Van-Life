import React, { useEffect } from "react";
import { Link, NavLink, useLoaderData, useLocation, useParams } from "react-router-dom";
import { getVans } from "../api";


export function loader({ params }){
    return getVans(params.id)
}

const VansDetails = () => {
    const location = useLocation()
    const vans = useLoaderData()

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <section className="vans--details">
        <Link className="back--vans" to={`..${search}`} relative="path" >&larr; <span>back to {type} vans</span></Link>
            {
                <div className="vans--card">
                    <img className="vans--image" src={vans.imageUrl}/>
                    <div className="vans--card--child">
                        <h3 className="vans--card--title">{vans.name}</h3>
                        <div className="vans--card--price">
                            <h4>${vans.price}</h4>
                            <p>/{vans.times}days</p>
                       </div>
                    </div>
                        <p className="vans--description">
                            {vans.description}
                        </p>
                    <NavLink to="" className={`vans--${vans.type}--btn`}>{vans.type}</NavLink>
                </div>
            }
        </section>
    )
}

export default VansDetails