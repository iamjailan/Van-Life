import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <section>
            <nav className="home--navbar">
                <NavLink to="/" className="nav--title">#VANLIFE</NavLink>
                <div className="nav--list">
                    <NavLink to="/host" className={({ isActive }) => isActive ? "active--links" : null}>Host</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? "active--links" : null}>About</NavLink>
                    <NavLink to="/vans" className={({isActive}) => isActive ? "active--links" : null}>Vans</NavLink>
                    <NavLink to="/login" className={({isActive}) => isActive ? "active--links" : null}><img className="profile--icon" src="/image/profile.svg" /></NavLink>
                </div>
            </nav>
        </section>
    )
}