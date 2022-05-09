import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Footer from "../dashboard/Footer"
import Header from "../dashboard/Header"
import IProduct from "../../main/interfaces/IProduct"
import { useSelector } from "react-redux"
import { RootState } from "../../main/store/redux/rootState"

const Category = () => {

    const [ProductToDisplay, setProductToDisplay] = useState<IProduct[] | null>([])
    const search = useSelector((state: RootState) => state.search)
    const params = useParams()

    async function getDataFroServer() {
        let result = (await axios.get(`/product/get-all?PageNumber=1&PageSize=20`)).data;
        (setProductToDisplay(result.data))
    }


    useEffect(() => {
        getDataFroServer()
    }, [])


    const dataProduct = () => {
        let productsToDisplay = [...ProductToDisplay]
        productsToDisplay = productsToDisplay.filter(
            product => product.categoryId === Number(params.id)

        )
            .filter(item =>
                item.name.toUpperCase().includes(search.toUpperCase())
            )
        return productsToDisplay
    }



    if (ProductToDisplay === null) return <h1>loading</h1>
    return (
        <>
            <section className="dashboard_wrapper">
                <Header />

                <main className="main_Section">
                    <div className='home__section'>
                        {
                            dataProduct().map(item =>
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

export default Category