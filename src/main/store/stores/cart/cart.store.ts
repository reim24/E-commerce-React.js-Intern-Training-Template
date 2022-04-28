import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IProduct from '../../../interfaces/IProduct';

export interface ICartStore {
    products: ICartProduct[]
    totalValue: number
}

export interface ICartProduct {
    product: IProduct
    quantity: number
}

export interface IQuantityPayload {
    productId: number
    quantity: number
}

const calculateTotalPrice = (storeState: ICartStore) => {
    let totPrice = 0;
    storeState.products.forEach((x) => totPrice += x.product.price * x.quantity);
    return totPrice;
}

const initValue: ICartStore = { products: [], totalValue: 0 }
const Cart = createSlice({
    name: 'cart',
    initialState: initValue,
    reducers: {
        addProduct(state, action: PayloadAction<ICartProduct>) {
            const index = state.products.findIndex(prod => prod.product.id === action.payload.product.id)
            if (index === -1) {
                state.products.push(action.payload);
            } else {
                state.products[index].quantity += action.payload.quantity
            }
            state.totalValue = calculateTotalPrice(state);
        },
        deleteProductById(state, action: PayloadAction<number>) {
            state.products = state.products.filter(x => x.product.id !== action.payload);
            state.totalValue = calculateTotalPrice(state);
        },
        changeProductQuantity(state, action: PayloadAction<IQuantityPayload>) {
            let productFound = state.products.find(x => x.product.id === action.payload.productId);
            productFound.quantity = action.payload.quantity;
            state.totalValue = calculateTotalPrice(state);
        },
        invalidateCart() {
            return initValue;
        }
    },
});

export default Cart;

export const { addProduct, deleteProductById, changeProductQuantity, invalidateCart } = Cart.actions;