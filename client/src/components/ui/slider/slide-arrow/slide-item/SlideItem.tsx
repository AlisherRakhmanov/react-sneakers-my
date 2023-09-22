import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { getProductsUrl } from '../../../../../config/url.config';
import Button from '../../../button/Button';
import { ISlide } from '../../slider.interface';

import styles from './SlideItem.module.scss';

const SlideItem: FC<{ slide: ISlide }> = ({ slide }) => {
	const navigate = useNavigate();
	return (
		<div className={styles.slide}>
			<div className={styles.info}>
				<h3>{slide.title}</h3>
				<Button
					onClick={() => navigate(getProductsUrl(slide.slug))}
					className={styles.button}
				>
					Купить
				</Button>
			</div>
			<img src='/zhaba.png' alt='' width={300} height={300} draggable={false} />
			<img
				src={slide.images[1]}
				alt=''
				width={400}
				height={400}
				draggable={false}
			/>
		</div>
	);
};

export default SlideItem;
