"use client"
import  "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";
import { FormEvent, useState } from "react";


const Login = ()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitLoginBtn =(e:FormEvent<HTMLInputElement>):void => {
        e.preventDefault()
        alert("Success login!!")
        console.log(email.length)
        console.log(password.length)
    }

    return (
        <>
            <div style = {{height: "100vh"}} className = "d-flex flex-column justify-content-center align-items-center bg-dark rounded-3">
                <form action = "#" className = "p-sm-4 shadow-sm d-flex justify-content-center flex-column bg-secondary" style = {{minWidth: "40rem"}}>
                    <input type = "email" placeholder="Enter your email" name = "email" className = "form-control mb-sm-2" onChange={(e)=>setEmail(e.target.value)} required/>
                    <input type = "password" placeholder="Enter your password" name = "password"  className = "form-control mb-sm-4" onChange={(e)=>setPassword(e.target.value)} required/>
                    <input type = "submit" value = "Login" className = "btn btn-danger form-control" onSubmit={submitLoginBtn}/>
                </form>
                <Link className = "text-center" href = {"#"}>Forgot the password ?</Link>
            </div>
        </>
    )
}

export default Login;