import { createSlice } from '@reduxjs/toolkit';

import { getStoreLocal } from '../../utils/local-storage/local-storage';

import { login, logout, register } from './user.actions';
import { IUserInitialState } from './user.interface';

const initialState: IUserInitialState = {
	user: getStoreLocal('user'),
	isLoading: false
};

const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.user;
			})
			.addCase(register.rejected, state => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(login.pending, state => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.user;
			})
			.addCase(login.rejected, state => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false;
				state.user = null;
			});
	}
});

export const { reducer } = UserSlice;
