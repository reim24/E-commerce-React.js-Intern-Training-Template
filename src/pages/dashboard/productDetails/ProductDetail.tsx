import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import IProduct from "../../../main/interfaces/IProduct"
import { addProduct, ICartProduct } from "../../../main/store/stores/cart/cart.store"
import Header from "../Header"
import './product.css'


const ProductDetails = () => {

    const [product, setProduct] = useState<IProduct | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    const params = useParams()
    const dispatch = useDispatch()


    async function getProducFromServer() {
        let result = await (await axios.get(`/product/${params.id}`));
        (setProduct(result.data))
    }

    useEffect(() => {
        getProducFromServer()
    }, [])


    const handleOnClick = () => {
        const prd: ICartProduct = { product, quantity };
        dispatch(addProduct(prd));
    };


    if (product === null) return <h1>loading</h1>
    return (
        <section>
            <Header />

            <div className="product_Section" >

                <div className=" image_container">
                    <img src={`data:image/png;base64,${product?.base64Image}`} alt="" />
                </div>

                <div className='product_card'>
                    <h2>{product?.name}</h2>
                    <br />
                    <p> Price {product?.price}$</p>
                    <br />
                    <p>{product?.shortDescription}</p>
                    <br />
                    <p>{product?.longDescription}</p>
                    <br />
                    <button className="add_to_cart_btn" onClick={handleOnClick}>Add to cart</button>
                </div>

            </div>

        </section>

    )
}

export default ProductDetails