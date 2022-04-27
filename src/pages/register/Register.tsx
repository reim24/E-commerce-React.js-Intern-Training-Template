import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import onRegister from "../../main/store/stores/user/register.store.on-register"
import './register.css'

const Register = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const handleClick = () => {
        navigate('/', { replace: true })
    }
    return (
        <section className="wrapper">
            <div className="register">
                <h1 >Register</h1>
                <form className="container" onSubmit={handleSubmit} >

                    <label className="labelBlock">
                        First Name:
                        <input className='input' type="text" name="firstName" />
                    </label>
                    <label className="labelBlock">
                        Last Name:
                        <input className='input' type="text" name="lastName" />
                    </label>
                    <label className="labelBlock">
                        Email:
                        <input className='input' type="email" name="email" />
                    </label>
                    <label className="labelBlock">
                        Birthday:
                        <input className='input' type="number" name="birthdate" />
                    </label>
                    <label className="labelBlock">
                        Phone:
                        <input className='input' type="text" name="phone" />
                    </label>
                    <label className="labelBlock">
                        Username:
                        <input className='input' type="text" name="username" />
                    </label>
                    <label className="labelBlock">
                        Password:
                        <input className='input' type="password" name="password" />
                    </label>
                    <input className='input' type="submit" value="Register" />

                </form>
                <p onClick={handleClick} className="info">Go to login page</p>
            </div>
        </section>
    )
}
export default Register