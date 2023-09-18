import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from './router.data';

const Router: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
