import cn from 'clsx';
import { FC } from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Skeleton
			{...rest}
			baseColor='#F0F0F0'
			highlightColor='#D8D9DA'
			className={cn('rounded-lg', className)}
		/>
	);
};

export default SkeletonLoader;
