import axios from "axios"
import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './dashboard.css'
import Header from "../dashboard/Header"
import Footer from "../dashboard/Footer"
import { useSelector } from "react-redux"
import { RootState } from "../../main/store/redux/rootState"


const DashboardPage: FC = () => {

    const [dataFromServer, setDataFromServer] = useState([])
    const search = useSelector((state: RootState) => state.search);

    async function getDataFroServer() {
        let result = (await axios.get(`/product/get-all?PageNumber=1&PageSize=20`)).data;
        (setDataFromServer(result.data))
    }

    useEffect(() => {
        getDataFroServer()
    }, [])


    function filterProducts() {
        let copyOfDdata = [...dataFromServer]
        copyOfDdata = copyOfDdata.filter(product => {
            return product.name.toUpperCase().includes(search.toUpperCase())
        })
        return copyOfDdata
    }


    if (dataFromServer === null) return <h1>loading</h1>
    return (
        <>
            <section className="dashboard_wrapper">
                <Header />

                <main className="main_Section">
                    <div className='home__section'>
                        {
                            filterProducts().map(item =>
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

            <Footer />
        </>

    )
}

export default DashboardPage

