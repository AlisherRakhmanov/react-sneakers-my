import { IUser } from '../../types/user.types';

export interface IUserState {
	email: string;
}

export interface IUserInitialState {
	user: IUserState | null;
	isLoading: boolean;
}

export interface IToken {
	token: string;
}

export interface IEmailPassword {
	email: string;
	password: string;
}

export interface IAuthResponse extends IToken {
	user: IUser;
}
