import { FC, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import "./RegisterPage.css"

const RegisterPage : FC = ()=> {

    const [user, setUser] = useState()

    function register(e: any) {

        e.preventDefault()
        const firstName = e.target.firstName.value
        const lastName = e.target.lastName.value
        const email = e.target.email.value
        const birthdate = e.target.birthdate.value
        const phone = e.target.phone.value
        const username = e.target.username.value
        const password = e.target.password.value

        fetch('http://reimusabelli-001-site1.itempurl.com/api/authentication/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password, birthdate: birthdate, firstName: firstName, lastName: lastName, phone: phone, username: username })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert('Oops, something went wrong.')
                } else {
                    localStorage.setItem('token', data.token)
                    setUser(data.user)
                }
            })

    }

    function logIn() {

        fetch(`http://reimusabelli-001-site1.itempurl.com/api/authentication/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    userName : "besim22",
                    password: "Besim123#"
                }),
            })
        .then((resp) => resp.json())
        .then((data) => {
            if (data.error) {
            alert(data.error);
            } else {
            console.log(data)
            }
        });

    }

    function validateUser() {

        fetch(`http://reimusabelli-001-site1.itempurl.com/api/authentication/validate-token?token=eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxMDIyIiwiVXNlck5hbWUiOiJiZXNpbTIyIiwiRW1haWwiOiJiZXNpbTEyQGVtYWlsLmNvbSIsImV4cCI6MTY1MDk3NjI4NX0.ka4cnOtI9xsSNthHEWUv4b4IHgSIYkZ9NwjxEEtnDvOPvqkRZg9NV6RiXDClE5RC8rsO4Z9VufuOCDRsflcpWQ`, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
        .then((resp) => resp.json())
        .then((data) => {
            if (data.error) {
            alert(data.error);
            } else {
            console.log(data)
            }
        });

    }

    useEffect(logIn, [])
    useEffect(validateUser, [])

    // const logInAxios = () => {

    //     const dataUser = {
    //         userName: "besim22",
    //         password: "Besim123#"
    //     }

    //     const stringifiedData = JSON.stringify(dataUser)

    //     axios.post("http://reimusabelli-001-site1.itempurl.com/api/authentication/login", {stringifiedData})
    //     .then(response => console.log(response.data))

    // }

    // useEffect(logInAxios, []);

    return (

        <>

            <div className="signup-page-wrapper">

                <div className="main-wrapper">

                    <form id="signup-form" onSubmit={function (e) {
                        register(e)
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