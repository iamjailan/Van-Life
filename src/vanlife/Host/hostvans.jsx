import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getHostVans } from "../api";
import { requireAuth } from "../utils";

export async function loader(){
    await requireAuth()
    return getHostVans()
}

const HostVans = () => {
    const vans = useLoaderData()

    const vansEl = vans.map(item => {
            return (
                <NavLink
                to={item.id}
                key={item.id}
                >
                <div className="host--vans--mini" key={item.id}>
                    <img src={item.imageUrl}/>
                    <div className="flex--host--vans">
                        <h1>{item.name}</h1>
                        <p>${item.price}/day</p>
                    </div>
                </div>
                </NavLink>
            )
    })

    return (
        <div className="vans--host">
            <h1 className="vans--host--title">Your listed Vans</h1>
            <div className="host--vans--list">
                {vansEl}
            </div>
        </div>
    )
}

export default HostVans