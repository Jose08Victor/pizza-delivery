import { createAction } from '@reduxjs/toolkit';

export const incrementQuantity = createAction<number>('INCREMENT_QUANTITY');
export const decrementQuantity = createAction<number>('DECREMENT_QUANTITY');
export const addToCart = createAction<number>('ADD_TO_CART');
export const removeFromCart = createAction<number>('REMOVE_FROM_CART');