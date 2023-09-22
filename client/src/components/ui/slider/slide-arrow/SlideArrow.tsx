import cn from 'clsx';
import { FC } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import styles from './SlideArrow.module.scss';

interface ISlideArrow {
	variant: 'left' | 'right';
	clickHandler: () => void;
}

const SlideArrow: FC<ISlideArrow> = ({ variant, clickHandler }) => {
	const isLeft = variant === 'left';
	return (
		<button
			className={cn(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft
			})}
			onClick={clickHandler}
		>
			{isLeft ? <MdChevronLeft /> : <MdChevronRight />}
		</button>
	);
};

export default SlideArrow;
