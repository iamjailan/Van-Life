import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <section className="error--page">
            <h1>404</h1>
            <h1>Sorry, the page was you looking for not found!</h1>
            <Link to=".." className="error--button">Return Home</Link>
        </section>
    )
}