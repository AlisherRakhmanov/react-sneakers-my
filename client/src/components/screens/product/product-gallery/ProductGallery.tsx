import cn from 'clsx';
import { FC, useState } from 'react';

import styles from './ProductGallery.module.scss';

const ProductGallery: FC<{ images: string[] }> = ({ images }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		images && (
			<div className={styles.gallery}>
				<img src={images[activeIndex]} alt={'image'} draggable={false} />

				<div className={styles.item}>
					{images.map((image, index) => (
						<button
							key={index}
							onClick={() => setActiveIndex(index)}
							className={cn(styles.button, {
								'border-primary shadow-md': index === activeIndex,
								'border-transparent': index !== activeIndex
							})}
						>
							<img
								src={image}
								alt={'image'}
								draggable={false}
								width={100}
								height={100}
							/>
						</button>
					))}
				</div>
			</div>
		)
	);
};

export default ProductGallery;
