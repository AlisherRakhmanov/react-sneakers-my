import { FC, PropsWithChildren } from 'react';

import styles from './Layout.module.scss';
import Header from './header/Header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<main>
				<div className='mx-auto max-w-7xl'>
					<Header />
					<div className={styles.content}>{children}</div>
				</div>
			</main>
		</div>
	);
};

export default Layout;
