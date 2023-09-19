import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IAddToCartPayload, IInitialStateCart } from './cart.interface';

const initialState: IInitialStateCart = {
	items: []
};

const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
			state.items.push();
		}
	}
});

export const { reducer } = CartSlice;
