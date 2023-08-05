import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "../pages/footer";

export default function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>

    )
}