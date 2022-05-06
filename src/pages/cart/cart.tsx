import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../main/store/redux/rootState";
import { ICartProduct, deleteProductById, changeProductQuantity, invalidateCart, IQuantityPayload, getBankAcc } from "../../main/store/stores/cart/cart.store";
import Header from "../dashboard/Header"
import './cart.css'
import IProduct from "../../main/interfaces/IProduct";
import axios from "axios";
import { useEffect, useState } from "react";
import useGetUser from "../../main/hooks/useGetUser";
import { useNavigate } from "react-router-dom";
import IBank from "../../main/interfaces/IBank";
import Footer from "../dashboard/Footer";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Cart = () => {

    const [bankInfo, setBankInfo] = useState([])
    const [selectedBank, SetSelectedBank] = useState<IBank | null>(null)

    const user = useGetUser()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const productsInCart: ICartProduct[] = useSelector((state: RootState) => state.cart.products);
    const totalValue: number = useSelector((state: RootState) => state.cart.totalValue);
    const notify = () => toast.success("Payement Accepted", { autoClose: 1000 })


    async function getBanks() {
        const result = (await axios.get(`http://reimusabelli-001-site1.itempurl.com/api/bankaccount/get-all?PageNumber=1&PageSize=10`)).data
        setBankInfo(result.data)
    }

    useEffect(() => {
        getBanks()
    }, [])


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


    const handlePayement = async (e: any) => {

        const transactionData = {
            //@ts-ignore
            bankAccountId: selectedBank.id,
            action: 1,
            amount: totalValue,
            description: `Payment of ${user?.username}`,
            isActive: true
        }

        await axios.post(`/banktransaction`, transactionData);


    }

    const handleCart = () => {
        dispatch(invalidateCart())
    }

    const handleOnClick = () => {
        navigate('/')
    }

    return (
        <section>
            <Header />
            <section className="component_Cart_wrapper">

                <section className="left_section">
                    <div className="card_cart">

                        <div className="title">
                            <h4>Shopping Cart</h4>
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
                                        <option disabled selected > QTY </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>

                                <div className="price_cart">
                                    <span className="span_price">{item.product.price * item.quantity}&euro;</span>
                                </div>
                            </div>
                        )}
                        <span onClick={handleOnClick} className="back-to-shop">Back to shop</span>
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
                            <br />
                            <p> {selectedBank ? <p> Balance Left {selectedBank.balance} &euro;</p> : 'Select a bank'}</p>
                            <br />
                            <select className="Bank_select" onChange={(e) => {
                                hanleBanks(e)
                            }}>
                                <option disabled selected > Select Bank Account </option>
                                {bankInfo.map(bank =>
                                    < option className="text-muted" key={bank.id} value={bank.code} > {bank.code}</option>
                                )}
                            </select>
                            <div className="row" >
                                <div className="col">TOTAL PRICE</div>
                                <div className="col text-right">&euro;{totalValue}</div>
                            </div>
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                handlePayement(e)
                                handleCart()
                                notify()
                            }}>
                                <button className="btn">CHECKOUT</button>
                            </form>
                        </div>
                    </div>
                </section>
            </section>

            <Footer />

        </section >
    )
}

export default Cart