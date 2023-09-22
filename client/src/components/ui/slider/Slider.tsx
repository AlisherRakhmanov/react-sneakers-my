import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Slider.module.scss';
import SlideArrow from './slide-arrow/SlideArrow';
import SlideItem from './slide-arrow/slide-item/SlideItem';
import { ISlide } from './slider.interface';
import { useSlider } from './useSlider';

const Slider: FC<{ slides: ISlide[] }> = ({ slides }) => {
	const { handleClick, index, isNext, isPrev, slideIn } = useSlider(
		slides.length
	);
	return (
		<div className={styles.slider}>
			<CSSTransition
				in={slideIn}
				classNames='slide-animation'
				timeout={300}
				unmountOnExit
			>
				<SlideItem slide={slides[index]} />
			</CSSTransition>

			{isPrev && (
				<SlideArrow variant='left' clickHandler={() => handleClick('prev')} />
			)}
			{isNext && (
				<SlideArrow variant='right' clickHandler={() => handleClick('next')} />
			)}
		</div>
	);
};

export default Slider;
