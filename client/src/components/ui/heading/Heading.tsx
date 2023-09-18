import { FC } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import styles from './Heading.module.scss';

interface IHeading {
	title: string;
	backLink?: boolean;
}

const Heading: FC<IHeading> = ({ title, backLink }) => {
	const navigate = useNavigate();

	return (
		<h1 className={styles.heading}>
			{backLink && (
				<button className={styles.backLink} onClick={() => navigate('/')}>
					<MdOutlineArrowBack size={25} />
				</button>
			)}
			{title}
		</h1>
	);
};

export default Heading;
