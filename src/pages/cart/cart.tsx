import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../main/store/redux/rootState";
import { ICartProduct, deleteProductById, changeProductQuantity, invalidateCart, IQuantityPayload } from "../../main/store/stores/cart/cart.store";
import Header from "../dashboard/Header"
import './cart.css'
import IProduct from "../../main/interfaces/IProduct";
import IBank from "../../main/interfaces/IBank"
import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {

    const dispatch = useDispatch()

    const [bankInfo, setBankInfo] = useState([])
    const [selectedBank, SetSelectedBank] = useState([])
    const [show, setShow] = useState(false)



    async function getBanks() {

        const result = (await axios.get(`http://reimusabelli-001-site1.itempurl.com/api/bankaccount/get-all?PageNumber=1&PageSize=10`)).data
        setBankInfo(result.data)
    }

    useEffect(() => {
        getBanks()
    }, [])


    const productsInCart: ICartProduct[] = useSelector((state: RootState) => state.cart.products);
    const totalValue: number = useSelector((state: RootState) => state.cart.totalValue);


    const handleDelte = (id: number) => {
        dispatch(deleteProductById(id));
    };


    const handleQuantity = (e: any, product: IProduct) => {
        const qty: IQuantityPayload = { productId: product.id, quantity: Number(e.target.value) }
        dispatch(changeProductQuantity(qty));
    };


    const hanleBanks = (e: any) => {
        const ChangeBank = [...bankInfo]
        const selectedBankAC = ChangeBank.find(bank => bank.code === e.target.value)
        SetSelectedBank(selectedBankAC)
    }

    console.log(selectedBank)


    const handleCart = () => {
        dispatch(invalidateCart())
    }


    return (
        <section>
            <Header />
            <section className="component_Cart_wrapper">

                <section className="left_section">
                    <div className="card_cart">

                        <div className="cart_wrapper">
                            <div className="title">
                                <div className="row">
                                    <div className="col">
                                        <h4><b>Shopping Cart</b></h4>
                                    </div>
                                </div>
                            </div>

                            {productsInCart.map(item =>
                                <div className="product_cart__">
                                    <button className="delete_btn"
                                        onClick={() => handleDelte(item.product.id)}
                                    >X</button>
                                    <img src={`data:image/png;base64,${item.product.base64Image}`} alt="img" className="img_cart" />

                                    <div className="details_cart">
                                        <p className="p_name">{item.product.name}</p>
                                    </div>

                                    <div className="quantity">
                                        < select name="quantity" id="quantity_select" onChange={(e) => {

                                            handleQuantity(e, item.product)
                                        }}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>

                                    <div className="price_cart">
                                        <span className="span_price">{item.product.price}&euro;</span>
                                    </div>
                                </div>
                            )}

                        </div>
                        <span className="back-to-shop">Back to shop</span>
                    </div>
                </section>



                <section className="right_section">
                    <div className="checkout_section">
                        <div className="col-md-4 summary">
                            <div>
                                <h5><b>Summary</b></h5>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col">Total items</div>
                                <div className="col text-right"> {productsInCart.length}</div>
                            </div>
                            {/* <form> */}
                            <p>SHIPPING</p>
                            <select onChange={(e) => {
                                hanleBanks(e)
                            }}>
                                {bankInfo.map(bank =>
                                    < option className="text-muted" key={bank.id} value={bank.code} > {bank.code}</option>
                                )}
                            </select>

                            {/* </form> */}
                            <div className="row" >
                                <div className="col">TOTAL PRICE</div>
                                <div className="col text-right">&euro;{totalValue}</div>
                            </div> <button className="btn" onClick={() => {

                                handleCart()
                            }}>CHECKOUT</button>
                        </div>
                    </div>
                </section>
            </section>

        </section >
    )
}

export default Cart