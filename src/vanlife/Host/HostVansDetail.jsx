import React from "react";
import { Link, NavLink, Outlet, useLoaderData} from "react-router-dom";
import { getHostVans } from "../api";
import { requireAuth } from "../utils";

export async function loader({ params }){
    await requireAuth()
    return getHostVans(params.id)
}

const HostVansDetail = () => {
    const currentVan = useLoaderData()

return (
    <section className="vans--details--parent">
            <Link className="back--vans" to=".." relative="path">&larr; <span>back to vans</span></Link>
            <div className="shared--host--vans">
                <div className="shared--host--one">
                    <img src={currentVan.imageUrl}/>
                    <div className="host--one--div">
                        <button className={`vans--${currentVan.type}--btn`}>{currentVan.type}</button>
                        <h1>{currentVan.name}</h1>
                        <p>${currentVan.price}/<span>day</span></p>
                    </div>
                </div>
            <div className="shared--host--two">
                <NavLink className={({isActive}) => isActive ? "active--links" : null} to="" end>Details</NavLink>
                <NavLink className={({isActive}) => isActive ? "active--links" : null} to="pricing">Pricing</NavLink>
                <NavLink className={({isActive}) => isActive ? "active--links" : null} to="photo">Photos</NavLink>
            </div>
            <Outlet context={{currentVan}} />
            </div>
    </section>
    )
}
export default HostVansDetail