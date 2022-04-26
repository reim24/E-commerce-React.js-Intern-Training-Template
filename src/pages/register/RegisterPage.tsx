import { FC, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import "./RegisterPage.css"

const RegisterPage : FC = ()=> {


    // const navigate = useNavigate()

    // useEffect(() => {
    //     validateUser()
    // }, [])
  
    // if (user) {
    //     navigate("/movies")
    // }

    // const fetchServices:any = async () => {

    //     const response:any = await axios

    //       .get("https://albvitafitness.glitch.me/services")
    //       .catch((err) => {
    //         console.log("Err: ", err)
    //       })

    //     dispatch(setServices(response.data))

    //   }
    
    //   useEffect(() => {
    //     fetchServices();
    //   }, []);

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
    
    // useEffect(() => {

    //     const logInAxios = async () => {

    //         const dataUser = {
    //             userName: "besim22",
    //             password: "Besim123#"
    //         }
    
    //         const stringifiedData = JSON.stringify(dataUser)
    
    //         const response = await axios.post("http://reimusabelli-001-site1.itempurl.com/api/authentication/login", {stringifiedData})
    //         console.log(response.data)
    
    //     }

    //     logInAxios()

    // }, []);

    return (

        <>

            <div className="signup-page-wrapper">

                <div className="main-wrapper">

                    <form id="signup-form" onSubmit={function (e) {
                    }}>
                        
                        <h1>Bank System</h1>

                        <label id="firstname" htmlFor="">

                            <input type="text" placeholder="Enter your firstname" required onChange={function (e) {
                            }}/>

                        </label>

                        <label id="lastname" htmlFor="">

                            <input type="text" placeholder="Enter your lastname" required onChange={function (e) {
                            }}/>

                        </label>

                        <label id="username" htmlFor="">

                            <input type="text" placeholder="Enter your username" required onChange={function (e) {
                            }}/>

                        </label>

                        <label htmlFor="">

                            <input type="text" id="email" placeholder="Enter your email" onChange={function (e) {
                            }}/>

                        </label>


                        <label id="username" htmlFor="">

                            <input type="phone" placeholder="Enter your phone number" required onChange={function (e) {
                            }}/>

                        </label>

                        <label id="username" htmlFor="">

                            <input type="date" placeholder="Enter your birthday" required onChange={function (e) {
                            }}/>

                        </label>

                        <label htmlFor="">

                            <input
                                type="password"
                                name=""
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