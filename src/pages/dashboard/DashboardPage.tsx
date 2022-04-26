import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { useStore } from "../../main/Zustand/store"

const DashboardPage : FC = () => {

    const { user } = useStore()
    const navigate = useNavigate()
    
    // if (user === null || user?.password === undefined) {
    //     navigate("/login")
    // }

    return(

        <>

            {/* {user?.password} */}

        </>

    )

}

export default DashboardPage