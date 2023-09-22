import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ICartItem } from '../../types/cart.types';

import { IChangeQuantity, IInitialStateCart } from './cart.interface';

const initialState: IInitialStateCart = {
	items: []
};

export const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ICartItem>) => {
			const isExist = state.items.some(
				item => item.product._id === action.payload.product._id
			);
			if (!isExist)
				state.items.push({ ...action.payload, id: action.payload.id });
		},

		removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
			state.items = state.items.filter(
				item => item.product._id !== action.payload.id
			);
		},

		changeQuantity: (state, action: PayloadAction<IChangeQuantity>) => {
			const { id, type } = action.payload;
			const item = state.items.find(item => item.id === id);

			if (item) type === 'plus' ? item.quantity++ : item.quantity--;
		}
	}
});

export const CartActions = CartSlice.actions;
