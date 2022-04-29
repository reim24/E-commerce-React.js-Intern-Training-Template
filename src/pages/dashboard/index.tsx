import axios from "axios"
import { FC, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import './dashboard.css'
import Header from "../dashboard/Header"


const DashboardPage: FC = () => {

    const [dataFromServer, setDataFromServer] = useState([])


    async function getDataFroServer() {
        let result = (await axios.get(`/product/get-all?PageNumber=1&PageSize=20`)).data;
        (setDataFromServer(result.data))
    }

    useEffect(() => {
        getDataFroServer()
    }, [])



    if (dataFromServer === null) return <h1>loading</h1>
    return (
        <>
            <section className="dashboard_wrapper">
                <Header />

                <main className="main_Section">
                    <div className='home__section'>
                        {
                            dataFromServer.map(item =>
                                <Link to={`/${item.id}`} key={item.id}>
                                    <div className='card'>
                                        <img src={`data:image/png;base64,${item.base64Image}`} alt="" />
                                        <div className="card__info">
                                            <div className="title_Price">
                                                <h2>{item.name}</h2>
                                                <h4> Price {item.price}$</h4>
                                            </div>
                                            <br />
                                            <h3>{item.shortDescription}</h3>
                                        </div>
                                    </div>
                                </Link>
                            )}
                    </div>
                </main>

            </section>

        </>

    )
}

export default DashboardPage

function dispatch(arg0: any) {
    throw new Error("Function not implemented.")
}
