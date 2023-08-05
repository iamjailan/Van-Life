import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Vans ,{loader as vansPageLoader} from "./pages/vans";
import VansDetails, {loader as vanDetailsLoader} from "./pages/vansDetails";
import "./pages/index.css"
import Layout from "./component/layout";
import Dashboard from "./Host/dashboard";
import Review from "./Host/review";
import Income from "./Host/income";
import HostLayout from "./Host/HostLayout";
import HostVans, {loader as hostVansLoader} from "./Host/hostvans";
import HostVansDetail, {loader as vansDetailsLoader} from "./Host/HostVansDetail";
import VansPhotos from "./Host/VansPhotos";
import VansPricing from "./Host/hostVanPrice";
import HostDetails from "./Host/HostDetails";
import NotFound from "./pages/notFound";
import Error from "./component/error";
import Login, {loader as loginLoader, action as actionLoader} from "./pages/login";
import { requireAuth } from "./utils";

import "./server"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="login" loader={loginLoader} action={actionLoader} element={<Login />} />
                    <Route path="vans" element={<Vans />} errorElement={<Error />} loader={vansPageLoader} />
                    <Route path="vans/:id" loader={vanDetailsLoader} element={<VansDetails />} />

                    <Route path="host" element={<HostLayout />} >
                        <Route index element={<Dashboard />} loader={async () => requireAuth()} />
                        <Route path="review" element={<Review />} loader={async () => requireAuth()} />
                        <Route path="income" element={<Income />} loader={async () => requireAuth()} />
                        <Route path="vans" element={<HostVans />} loader={hostVansLoader}/>
                        <Route path="vans/:id" element={<HostVansDetail />} loader={vansDetailsLoader}>
                            <Route index element={<HostDetails />} loader={async () => requireAuth()}/>
                            <Route path="pricing" element={<VansPricing />} loader={async () => requireAuth()} />
                            <Route path="photo" element={<VansPhotos />} loader={async () => requireAuth()} />
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFound />} />
    </Route>
))

export default function App(){
    return (
        <RouterProvider router={router} />
    )
}