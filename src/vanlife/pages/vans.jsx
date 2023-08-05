import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../api";

export function loader(){
    return getVans()
}

const Vans = () => {
    const [searchVans, setSearchVans] = useSearchParams();

    const vans = useLoaderData()

    const typeFilter = searchVans.get("type")

    const displayFilter = typeFilter ? vans.filter(filter => filter.type === typeFilter) : vans

    const vansEl = displayFilter.map(item => {
        return (
            <div className="vans--card" key={item.id}>
            <NavLink state={{ search: `?${searchVans.toString()}`, type: typeFilter}} to={item.id}>
                    <img className="vans--image" src={item.imageUrl}/>
                    <div className="vans--card--child">
                        <h3 className="vans--card--title">{item.name}</h3>
                        <div className="vans--card--price">
                            <h4>${item.price}</h4>
                            <p>/{item.times}days</p>
                       </div>
                    </div>
            </NavLink>
                    <NavLink className={`vans--${item.type}--btn`}>{item.type}</NavLink>
                </div>
        )
    })


    return (
        <section className="vans--container">
            <div className="vans--main">
                <h1 className="vans--title">Explores our vans options</h1>
                <div className="vans--links">

                    <button onClick={() => setSearchVans({type : "simple"})} className={`vans--links--btn ${typeFilter === "simple" ? "selected" : ""}`}>Simple</button>
                    <button onClick={() => setSearchVans({type : "luxury"})} className={`vans--links--btn ${typeFilter === "luxury" ? "selected" : ""}`}>luxury</button>
                    <button onClick={() => setSearchVans({type : "rugged"})} className={`vans--links--btn ${typeFilter === "rugged" ? "selected" : ""}`}>Rugged</button>
                    {typeFilter ?  <button onClick={() => setSearchVans({})} className="vans--links--clear">clear items</button> : null}

                    {/* <NavLink to="?type=simple" className="vans--links--btn">Simple</NavLink>
                    <NavLink to="?type=luxury" className="vans--links--btn">luxury</NavLink>
                    <NavLink to="?type=rugged" className="vans--links--btn">Rugged</NavLink>
                    <NavLink to="."  className="vans--links--clear">clear items</NavLink> */}
                </div>
            </div>
            <div className="card--list">
                {vansEl}
            </div>
        </section>
    )
}

export default Vans