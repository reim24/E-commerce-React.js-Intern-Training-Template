import { FC, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import "./RegisterPage.css"
import { useStore } from "../../main/Zustand/store"
import { navigateTo } from "../../main/store/stores/navigation/navigation.store"

const RegisterPage : FC = ()=> {

    const { registerUser, logInUser, user } = useStore()
    const navigate = useNavigate()
    
    if(user) {
        navigate("/dashboard")
    }

    return (

        <>

            <div className="signup-page-wrapper">

                <div className="main-wrapper">

                    <form id="signup-form" onSubmit={function (e) {
                        registerUser(e)
                    }}>
                        
                        <h1>Bank System</h1>

                        <label id="firstname" htmlFor="">

                            <input type="text" name = "firstName" placeholder="Enter your firstname" required onChange={function (e) {
                            }}/>

                        </label>

                        <label id="lastname" htmlFor="">

                            <input type="text" name = "lastName" placeholder="Enter your lastname" required onChange={function (e) {
                            }}/>

                        </label>

                        <label id="username" htmlFor="">

                            <input type="text" name = "username" placeholder="Enter your username" required onChange={function (e) {
                            }}/>

                        </label>

                        <label htmlFor="">

                            <input type="text" name = "email" id="email" placeholder="Enter your email" onChange={function (e) {
                            }}/>

                        </label>

                        <label id="username" htmlFor="">

                            <input type="phone" name = "phone" placeholder="Enter your phone number" required onChange={function (e) {
                            }}/>

                        </label>

                        <label id="username" htmlFor="">

                            <input type="date" name = "birthdate" placeholder="Enter your birthday" required onChange={function (e) {
                            }}/>

                        </label>

                        <label htmlFor="">
                            
                            <input
                                type="password"
                                name = "password"
                                id="password"
                                placeholder="Enter your password"
                                required
                                onChange={function (e) {
                                }}
                            />

                        </label>

                        <label htmlFor="">
                            <button>Sign Up</button>
                        </label>

                        <label id="login-link-wrapper" htmlFor="">

                            You have an account?

                            <Link id="link" to={"../login"}>
                                Log In
                            </Link>
                            
                        </label>

                    </form>

                </div>

            </div>

        </>

    )
    
}

export default RegisterPage