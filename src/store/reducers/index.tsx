import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import productsData from '../../json/products.json';
import { incrementQuantity, decrementQuantity, addToCart, removeFromCart } from '../actions';

interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    quantity: number;
}

interface CartItem extends Product { }

const productsReducer = createReducer(productsData.data, builder => {
    builder
        .addCase(incrementQuantity, (state, action) => {
            const product = state.find((item: Product) => item.id === action.payload);
            if (product) {
                product.quantity++;
            }
        })
        .addCase(decrementQuantity, (state, action) => {
            const product = state.find((item: Product) => item.id === action.payload);
            if (product && product.quantity > 1) {
                product.quantity--;
            }
        });
});

const cartReducer = createReducer<CartItem[]>([], builder => {
    builder
        .addCase(addToCart, (state, action) => {
            const productToAdd = productsData.data.find((item: Product) => item.id === action.payload);
            if (productToAdd) {
                const existingProductIndex = state.findIndex((item: CartItem) => item.id === productToAdd.id);
                if (existingProductIndex !== -1) {
                    state[existingProductIndex].quantity += productToAdd.quantity;
                } else {
                    state.push({ ...productToAdd });
                }
            }
        })
        .addCase(removeFromCart, (state, action) => {
            return state.filter(item => item.id !== action.payload);
        })
        .addCase(incrementQuantity, (state, action) => {
            const item = state.find((item: CartItem) => item.id === action.payload);
            if (item) {
                item.quantity++;
            }
        })
        .addCase(decrementQuantity, (state, action) => {
            const item = state.find((item: CartItem) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        });
});

export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;