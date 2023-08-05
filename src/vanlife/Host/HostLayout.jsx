import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
    return (
        <>
        <div className="host--nav">
            <NavLink className={({isActive}) => isActive ? "active--links" : null} end to="/host">Dashboard</NavLink>
            <NavLink className={({isActive}) => isActive ? "active--links" : null} to="income">Income</NavLink>
            <NavLink className={({isActive}) => isActive ? "active--links" : null} to="vans">Vans</NavLink>
            <NavLink className={({isActive}) => isActive ? "active--links" : null} to="Review">Review</NavLink>
        </div>
         <Outlet />
        </>
    )
}

export default HostLayout