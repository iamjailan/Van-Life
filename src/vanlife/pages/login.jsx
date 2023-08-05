import React from "react";
import { Form, Link, redirect, useActionData, useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { loginUser } from "../api";


export function loader({ request }){
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        const data = await loginUser({email, password})
        localStorage.setItem("loggedin", true)
        return redirect("/host")
    } catch (err) {
        return err.message
    }
}

export default function Login(){
    const errorMessage = useActionData()
    const navigate = useNavigate()
    const message = useLoaderData()
    const navigation = useNavigation()

    function submitForm(e){
        e.preventDefault()
        setStatus("submitting")
        loginUser()
        .then(data => {
            navigate("/host", {replace: true})
        })
        .finally(() => setStatus("idle"))
    }
    return (
        <div className="login--parent">
            <div className="login">
                <h1>Sign in to your account</h1>
                {message && <h2 className="login--error">{message}</h2>}
                {errorMessage && <h4>{errorMessage}</h4>}
                <Form method="post" replace>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter Your E-mail"
                     />
                    <input 
                    type="password" 
                    name="password" 
                    placeholder="Enter Your Password"
                     />
                    <button type="submit" disabled={navigation.state === "submitting"}>{navigation.state === "submitting" ? "Logging in" : "Login"}</button>
                </Form>
                <h3 className="login--create">Don't have an account? <Link>Create one now</Link></h3>
            </div>
        </div>
    )
}