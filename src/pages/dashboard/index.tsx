import axios from "axios"
import { FC, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import onLogout from "../../main/store/stores/user/login.store.on-logout"
import './dashboard.css'


const DashboardPage: FC = () => {

    const [dataFromServer, setDataFromServer] = useState([])

    async function getDataFroServer() {
        let result = (await axios.get(`/product/get-all?PageNumber=1&PageSize=20`)).data;
        dispatch(setDataFromServer(result.data))
    }

    useEffect(() => {
        getDataFroServer()
    }, [])


    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(onLogout())
    }

    if (dataFromServer === null) return <h1>loading</h1>
    return (
        <>
            <section className="dashboard_wrapper">

                <header className="header">
                    <nav className="nav_left">
                        <ul className="headerUl">
                            <li className="headerli">
                                cart
                            </li>
                        </ul>
                    </nav>

                    <nav className="nav_right">
                        <ul className="headerUl">
                            <li className="headerli">
                                <button onClick={handleSubmit}> signout</button>
                            </li>
                        </ul>
                    </nav>

                </header>

                <main className="main_Section">
                    <div className='home__section'>
                        {
                            dataFromServer.map(item =>
                                <div key={item.id} className='card'>
                                    <img src={`image/jpeg;base64,${item.base64Image}`} alt="" />
                                    <div className="card__info">
                                        <div className="title_Price">
                                            <h2>{item.name}</h2>
                                            <h4> {item.price}$</h4>
                                        </div>
                                        <br />
                                        <h3>{item.shortDescription}</h3>
                                    </div>

                                </div>
                            )}
                    </div>
                </main>

            </section>

        </>

    )
}

export default DashboardPage