import { FC, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { navigateTo } from "../../main/store/stores/navigation/navigation.store";
import onLogin from "../../main/store/stores/user/login.store.on-login"

const TestPage : FC = ()=>{
    
    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const dispatch = useDispatch();
    const handleSubmit=()=>{
        dispatch(onLogin({userName,password}));
    }

    const navigate = useNavigate();

    const handleButtonClick=()=>{
        navigate("/jkasfklsdf", {replace:true});
    }
    return(
        <>
        <label>email</label>
        <input
        onChange={(e)=>setUserName(e.target.value)}
        ></input>
        <br></br>
        <label>password</label>
        <input
        onChange={(e)=>setPassword(e.target.value)}
        ></input>
    <br>
    </br>
    <button onClick={()=>handleSubmit()}>Submit</button>
    <br>
    </br>
    <button onClick={()=>handleButtonClick()}>redirect</button>
        </>
    )
}

export default TestPage