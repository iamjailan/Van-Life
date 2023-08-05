import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <section className="about--container">
            <main>
                <div className="main--image">

                </div>
                <div className="main--text">
                    <h1>don't squeeze in a sedan when you could relax in a van.</h1>
                    <p>At Vans Travel Company, we understand that banned destinations often hold a certain allure and mystique, and we strive to curate extraordinary itineraries that allow our clients to discover the hidden gems and untapped beauty of these off-limits locations. Our expert team of travel enthusiasts and local guides work tirelessly to ensure that every trip is meticulously planned, offering a seamless and immersive travel experience.</p>
                </div>
                <div className="main--card">
                    <div className="card--child">
                        <h1>Your destination is waiting Your vans is ready.</h1>
                        <button className="card--btn">Explore our vans</button>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default About