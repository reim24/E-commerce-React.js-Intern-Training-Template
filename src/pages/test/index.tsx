import { FC, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import onLogin from "../../main/store/stores/user/login.store.on-login"
import './test.css'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const TestPage: FC = () => {


    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const notify = () => toast("Welcome")


    const handleSubmit = () => {
        dispatch(onLogin({ userName, password }));
    }


    const handleButtonClick = () => {
        navigate("/Register", { replace: true });
    }

    return (
        <>
            <section className="wrapper">
                <div className="login">
                    <h1>Login</h1>
                    <div className="container">
                        <label className="labelBlock">Username</label>
                        <input
                            className='input'
                            onChange={(e) => setUserName(e.target.value)}
                        ></input>

                        <label className="labelBlock" >password</label>
                        <input type='password' className='input'
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <div className="button_container">
                        <button className="button__login" onClick={() => {
                            handleSubmit()
                            notify()
                        }
                        }>Submit</button>
                        <button className="button__login" onClick={() => handleButtonClick()}>Register Now</button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TestPage