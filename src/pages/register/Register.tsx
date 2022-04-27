// import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import onRegister from "../../main/store/stores/user/login.store.on-login"
import './register.css'

export default function Register() {

    // const [registerUser, setRegisterUser] = useState([intialState])
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const firstName = e.target.firstName.value
        const lastName = e.target.lastName.value
        const email = e.target.email.value
        const birthdate = e.target.birthdate.value
        const phone = e.target.phone.value
        const username = e.target.username.value
        const password = e.target.password.value
        const data = {
            firstName,
            lastName,
            email,
            birthdate,
            phone,
            username,
            password
        }
        dispatch(onRegister(data))
    }

    return (
        <>
            <section className="wrapper">
                <div className="register">
                    <h1>Register</h1>

                    <form className="container">
                        <label className="labelBlock">
                            firstName
                            <input className='input' type='text' name="firstName" />
                        </label>

                        <label className="labelBlock">
                            lastName
                            <input className='input' name="lastName" type='text' />
                        </label>

                        <label className="labelBlock">
                            email
                            <input className='input' name="email" type='email' />
                        </label>

                        <label className="labelBlock">
                            birthdate
                            <input className='input' name="birthdate" type='text ' />
                        </label>

                        <label className="labelBlock">
                            phone
                            <input className='input' name="phone" type='number' />
                        </label>

                        <label className="labelBlock">
                            username
                            <input className='input' name="username" type='text' />
                        </label>

                        <label className="labelBlock">
                            password
                            <input className='input' name="password" type='password' />
                        </label>

                        <button className="button_login" onSubmit={(e) => {
                            handleSubmit(e)
                        }}>Submit</button>
                        <button className="button_login"
                            onClick={() => navigate('/login')} >login</button>
                    </form>
                </div>
            </section>
        </>
    )
}