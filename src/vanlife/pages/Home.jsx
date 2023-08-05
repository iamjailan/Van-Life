import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <section className="home--container">
            <div className="main--content">
                <h1 className="main--title">You got the travel plans, we got the travel vans</h1>
                <p className="main--text">Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.</p>
                <button className="main--btn">Find Your Vans</button>
            </div>
        </section>
    )
}

export default Home