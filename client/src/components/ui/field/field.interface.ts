import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface IFieldProps {
	placeholder: string;
	error?: FieldError | undefined;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends TypeInputPropsField {}
