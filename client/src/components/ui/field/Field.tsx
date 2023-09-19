import cn from 'clsx';
import { forwardRef } from 'react';

import styles from './Field.module.scss';
import { IField } from './field.interface';

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, className, type = 'text', error, ...rest }, ref) => {
		return (
			<div className={cn(styles.field, className)}>
				<input type={type} ref={ref} placeholder={placeholder} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	}
);

Field.displayName = 'Field';

export default Field;
