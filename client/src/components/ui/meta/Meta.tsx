import { FC, PropsWithChildren } from 'react';

import Layout from '../../layout/Layout';

interface ISeo {
	title: string;
}

const Meta: FC<PropsWithChildren<ISeo>> = ({ children, title }) => {
	return (
		<>
			<head>
				<title>{title}</title>
			</head>
			<Layout>{children}</Layout>
		</>
	);
};

export default Meta;
