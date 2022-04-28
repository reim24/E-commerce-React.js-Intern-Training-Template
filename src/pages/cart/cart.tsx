import { useSelector } from "react-redux";
import { RootState } from "../../main/store/redux/rootState";
import { ICartProduct } from "../../main/store/stores/cart/cart.store";
import Header from "../dashboard/Header"
import './cart.css'

const Cart = () => {


    const productsInCart: ICartProduct[] = useSelector((state: RootState) => state.cart.products);

    const totalValue: number = useSelector((state: RootState) => state.cart.totalValue);

    console.log(productsInCart)
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
                                    <div className="col align-self-center text-right text-muted">3 items</div>
                                </div>
                            </div>

                            {productsInCart.map(item =>
                                <div className="product_cart__">
                                    <button className="delete_btn">X</button>
                                    <img src={`data:image/png;base64,${item.product.base64Image}`} alt="img" className="img_cart" />

                                    <div className="details_cart">
                                        <p className="p_name">{item.product.name}</p>
                                    </div>

                                    <div className="quantity">
                                        < select name="quantity" id="quantity_select">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>

                                    <div className="price_cart">
                                        <span className="span_price">price</span>
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
                                <div className="col text-right">&euro; {totalValue}</div>
                            </div>
                            <form>
                                <p>SHIPPING</p>
                                <select>
                                    <option className="text-muted">Bank 1- Price</option>
                                    <option className="text-muted">Bank 2- Price</option>
                                    <option className="text-muted">Bank 3- Price</option>
                                </select>

                            </form>
                            <div className="row" >
                                <div className="col">TOTAL PRICE</div>
                                <div className="col text-right">&euro;{totalValue}</div>
                            </div> <button className="btn">CHECKOUT</button>
                        </div>
                    </div>
                </section>
            </section>

        </section >
    )
}

export default Cart