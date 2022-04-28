import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../Header"
import './product.css'

const ProductDetails = () => {

    const [itemFromServer, setItemFromServer] = useState([])
    const params = useParams()


    async function getProducFromServer() {
        let result = await (await axios.get(`/product/${params.id}`));
        (setItemFromServer(result.data))
    }

    useEffect(() => {
        getProducFromServer()
    }, [])


    if (itemFromServer === null) return <h1>loading</h1>
    return (
        <section>
            <Header />

            <main className="product_Section">

                <div className=" image_container">
                    {/* @ts-ignore */}
                    <img src={`data:image/png;base64,${itemFromServer?.base64Image}`} alt="" />
                </div>

                <div className='product_card'>

                    {/* @ts-ignore */}

                    <h2>{itemFromServer?.name}</h2>
                    <br />
                    {/* @ts-ignore */}
                    <h4> Price {itemFromServer?.price}$</h4>
                    <br />
                    {/* @ts-ignore */}
                    <h3>{itemFromServer?.shortDescription}</h3>
                    <br />
                    {/* @ts-ignore */}
                    <h3>{itemFromServer?.longDescription}</h3>
                    <br />
                    <button>Add to cart</button>
                </div>

            </main>

        </section>

    )
}

export default ProductDetails