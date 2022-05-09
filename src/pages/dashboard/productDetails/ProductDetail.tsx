import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import IProduct from "../../../main/interfaces/IProduct"
import { RootState } from "../../../main/store/redux/rootState"
import { addProduct, changeProductQuantity, ICartProduct, IQuantityPayload } from "../../../main/store/stores/cart/cart.store"
import { setModal } from "../../../main/store/stores/modal/state.modal"
import Header from "../Header"
import Modals from "../../modal/modals"
import './product.css'
import Footer from "../Footer"

const ProductDetails = () => {

    const [product, setProduct] = useState<IProduct | null>(null);
    const [newQty, setNewQty] = useState<any>('');


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
        const prd: ICartProduct = { product: product, quantity: newQty };
        dispatch(addProduct(prd));
    };


    const hanndleQuantity = (e: any) => {
        setNewQty(e.target.value)
    }



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

                    < select name="quantity" id="quantity_select" onChange={hanndleQuantity}>
                        <option disabled selected > QTY </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button className="add_to_cart_btn" onClick={() => {
                        dispatch(setModal('testingModal'))
                    }}>modal</button>

                </div>

            </div>

            <Modals />
            <Footer />
        </section>
    )
}

export default ProductDetails